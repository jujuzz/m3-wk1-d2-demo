var express = require('express');
var app = express();

var routedemo = require('./exp_demo3a.js');
app.use('/routedemo', routedemo);


app.listen(3000);