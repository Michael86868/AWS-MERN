const getStationData = require("express").Router();
const modelStationData = require("../../models/stationData");
getStationData.get("/get-station-data", (req,res) => {
    modelStationData.find({}, (err,docs) => {
        if(err){
            return res.json({
                msg: "Bohužel se nepodařilo získat žádné suroviny",
                documents: []
            })
        }else{
            return res.json({
                msg: "Úspěšně se nám podařilo získat suroviny",
                document:docs
            });
        }
    });
});

module.exports = getStationData;