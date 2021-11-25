const StationData = require('../Model/stationData');



exports.create = (req, res) => {
    const stationData = new StationData({
        dataCreated: Date.now()+3600000,
        dallasTemperature1: req.body.dallasTemperature1,
        dallasTemperature2: req.body.dallasTemperature2,
        dallasTemperature3: req.body.dallasTemperature3,
        bmeTemperature: req.body.bmeTemperature,
        bmePressure: req.body.bmePressure,
        bmeHumidity: req.body.bmeHumidity,
        bmeAltitude: req.body.bmeAltitude,
        mqGas: req.body.mqGas,
        mhRain: req.body.mhRain
    });
    stationData.save((err,document) => {
        if(err){
            return res.json({
                msg: "Bohužel nedošlo k uložení dat z meteostanice"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému uložení suroviny ${JSON.stringify(document)}`
            })
        }
    });
}

exports.findAll = (req, res) => {
    StationData.find({}, (err,docs) => {
        if(err){
            return res.json({
                msg: "Bohužel se nepodařilo získat žádné data",
                documents: []
            })
        }else{
            return res.json({
                msg: "Úspěšně se nám podařilo získat data",
                document:docs
            });
        }
    });
}

exports.findOne = (req, res) => {
    StationData.findOne({}, (err,docs) => {
        if(err){
            return res.json({
                msg: "Bohužel se nepodařilo získat žádné data",
                documents: []
            });
        }else{
            return res.json({
                msg: "Úspěšně se nám podařilo získat data",
                document: docs,
                sunset: computeSunrise(Math.floor(((new Date())-(new Date((new Date()).getFullYear(),0,0)))/(1000*60*60*24)),false),
                sunrise: computeSunrise(Math.floor(((new Date())-(new Date((new Date()).getFullYear(),0,0)))/(1000*60*60*24)),true)
            });
        }
    }).sort({_id:-1});
}

exports.update = (req, res) => {
    StationData.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true }, (err,document) => {
        if(err){
            return res.json({
                msg: "Bohužel nedošlo k uložení dat z meteostanice"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému uložení suroviny ${JSON.stringify(document)}`
            })
        }
    })
}

exports.delete = (req, res) => {
    StationData.findByIdAndDelete(req.params.id, { useFindAndModify: false }, (err,document) => {
        if(err){
            return res.json({
                msg: "Bohužel nedošlo ke smazání dat"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému smazání dat ${JSON.stringify(document)}`
            })
        }
    })
}

function computeSunrise(day, sunrise) {
    var longitude = 18.43688056;
    var latitude = 49.77983889;
    var zenith = 90.83333333333333;
    var D2R = Math.PI / 180;
    var R2D = 180 / Math.PI;
    var lnHour = longitude / 15;
    var t;
    if (sunrise) {
        t = day + ((6 - lnHour) / 24);
    } else {
        t = day + ((18 - lnHour) / 24);
    }
    M = (0.9856 * t) - 3.289;
    L = M + (1.916 * Math.sin(M * D2R)) + (0.020 * Math.sin(2 * M * D2R)) + 282.634;
    if (L > 360) {
        L = L - 360;
    } else if (L < 0) {
        L = L + 360;
    }
    RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R));
    if (RA > 360) {
        RA = RA - 360;
    } else if (RA < 0) {
        RA = RA + 360;
    }
    Lquadrant = (Math.floor(L / (90))) * 90;
    RAquadrant = (Math.floor(RA / 90)) * 90;
    RA = RA + (Lquadrant - RAquadrant);
    RA = RA / 15;
    sinDec = 0.39782 * Math.sin(L * D2R);
    cosDec = Math.cos(Math.asin(sinDec));
    cosH = (Math.cos(zenith * D2R) - (sinDec * Math.sin(latitude * D2R))) / (cosDec * Math.cos(latitude * D2R));
     H = (sunrise)?H = 360 - R2D * Math.acos(cosH):H = R2D * Math.acos(cosH);
    H = H / 15;
    T = H + RA - (0.06571 * t) - 6.622;
    UT = T - lnHour;
    if (UT > 24) {
        UT = UT - 24;
    } else if (UT < 0) {
        UT = UT + 24;
    }
    let time = new Date((UT+1)*3600*1000-3600*1000);
    return ('0' + time.getHours()).slice(-2)+':'+('0' + time.getMinutes()).slice(-2)+':'+('0' + time.getSeconds()).slice(-2);
}



