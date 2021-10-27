const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");
const cors = require("cors");
const getMaterials = require("./routes/GET/getMaterials");
const setMaterial = require("./routes/POST/setMaterial");
db.connect();

/**
 * Middleware
 */
 app.use(express.json({extended:false}));
 app.use(express.text({extended:false}));
 
/**
 * Routes - GET
 */
app.use("/", cors(), getMaterials);
/**
 * Routes - POST
 */
app.use("/", setMaterial);



app.get("/", (request,response) => {
    response.send("Hlavní stránka");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});
