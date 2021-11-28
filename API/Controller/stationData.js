const StationData = require('../Model/stationData');
const { computeSunrise } = require('../Function/calculateSunrise');



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
    StationData.findOne((req.params.id === '-1')?{}:{_id: req.params.id}, (err,docs) => {
        if(err){
            return res.json({
                msg: "Bohužel se nepodařilo získat žádné data",
                documents: []
            });
        }else{
            return res.json({
                msg: "Úspěšně se nám podařilo získat data",
                document: {...JSON.parse(JSON.stringify(docs)),...{sunrise: computeSunrise(true), sunset: computeSunrise(false)}},
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





