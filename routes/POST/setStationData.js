const setStationData = require("express").Router();
const modelStationData = require("../../models/stationData");

setStationData.post("/set-station-data",(req,res) => {
    const {dallasTemperature1,dallasTemperature2,dallasTemperature3,bmeTemperature,bmePressure,bmeHumidity,bmeAltitude,mqGas,mhRain} = req.body;
    const material = new modelStationData({
        dataCreated: Date.now()+3600000,
        dallasTemperature1: dallasTemperature1,
        dallasTemperature2: dallasTemperature2,
        dallasTemperature3: dallasTemperature3,
        bmeTemperature: bmeTemperature,
        bmePressure: bmePressure,
        bmeHumidity: bmeHumidity,
        bmeAltitude: bmeAltitude,
        mqGas: mqGas,
        mhRain: mhRain,
    });
    material.save((err,document) => {
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
});

module.exports = setStationData;

/**
 *
 *  {
 *   "api_key": "tPmAT5Ab3j7F9",
 *   "dallas_1": 23.5,
 *   "dallas_2": 23,
 *   "dallas_3": 22.875,
 *   "bme_temp": 23.76,
 *   "bme_pressure": 969.2873,
 *   "bme_approx": 372.6226,
 *   "bme_humidity": 46.08203,
 *   "gas_sensor": 2663,
 *   "rain_sensor": 4095
 *  }
 */