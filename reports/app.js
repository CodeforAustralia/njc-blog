var express = require("express");
var app = express();
var path = require('path');

// override some dirs for this sub app
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

module.exports = app;
