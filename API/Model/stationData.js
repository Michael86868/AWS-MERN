const mongoose = require("mongoose");

const stationData = new mongoose.Schema({
    dataCreated:{
        type: Date,
    },
    dallasTemperature1:{
        type: Number,
    },
    dallasTemperature2:{
        type: Number,
    },
    dallasTemperature3:{
        type: Number,
    },
    bmeTemperature:{
        type: Number,
    },
    bmePressure:{
        type: Number,
    },
    bmeHumidity:{
        type: Number,
    },
    bmeAltitude:{
        type: Number,
    },
    mqGas:{
        type: Number,
    },
    mhRain:{
        type: Number,
    },
});

module.exports = mongoose.model("station_data", stationData);