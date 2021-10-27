const setMaterial = require("express").Router();
const modelMaterial = require("../../models/material");

setMaterial.post("/set-material",(req,res) => {
    const {name} = req.body;
    const material = new modelMaterial({
        name:name
    });
    material.save((err,document) => {
        if(err){
            return res.json({
                msg: "Bohužel nedošlo k uložení suroviny"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému uložení suroviny ${JSON.stringify(document)}`
            })
        }
    });
});

module.exports = setMaterial;