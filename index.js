
/**
 * Nodejs server for aggregating and sending pre-order aggregated emails. 
 * Toast Hackathon  --- 3/16/2017
 * Authors: Chris Buonocore / Ming
 */

// Nodejs libraries.
var express = require("express");
var bodyParser = require("body-parser");
var app  = express();
var cors = require('cors')

// Custom libraries.
var toast = require('toast');

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


var PORT = 3001;
app.listen(PORT,function(){
  console.log("Started on PORT %d", PORT);
}):