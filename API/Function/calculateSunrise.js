module.exports = {
    computeSunrise: (sunrise, day) => {
        if(day === undefined){
            day = Math.floor(((new Date())-(new Date((new Date()).getFullYear(),0,0)))/(1000*60*60*24))
        }
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
};