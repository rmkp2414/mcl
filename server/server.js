//Packages
var path = require('path');
var fs = require('fs');
var express = require('express');

//Imports//
var indexRoutes = require('./routes/index');

//create app
var app = express();

//telling express how to return a file
//by default express will return
app.set('view engine','html');


app.engine('html',function(path,options,callbacks){
    "use strict";
fs.readFile(path,'utf-8',callback);
});

//middleware
app.use(express.static(path.join(__dirname,'../client')));

//routes
app.use('/',indexRoutes);

//error
app.use(function(err,req,res,next){
    res.status(err.status||500);
});

module.exports = app;
