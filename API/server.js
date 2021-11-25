const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./connect");
const cors = require("cors");
const bodyParser = require('body-parser');
const stationData = require("./Model/stationData");
db.connect();

/**
 * Middleware
 */
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
 
/**
 * Routes
 */
require('./Route/stationData.js')(app)


app.get("/", (request,response) => {
    response.send("Hlavní stránka");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});
