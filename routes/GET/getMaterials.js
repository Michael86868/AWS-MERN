const getMaterials = require("express").Router();
const materials = require("../../models/material");
getMaterials.get("/get-materials", (req,res) => {
    materials.find({}, (err,docs) => {
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

module.exports = getMaterials;