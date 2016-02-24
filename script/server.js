// Require dependencies
var express = require('express');
var app = express();
var path = require('path');

var rootpath = path.normalize(__dirname + '/..');

app.use(express.static(rootpath));
app.listen(8080);
console.log('Listening on port 8080...');
