"use strict";

/* App server of Course Connect */

/*
 * ==== Set up ========
 */
var http = require('http'),
 	config = require('./config.js'),  
	express = require('express');  

var app = express();

app.use(express.static(__dirname + "/app"));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));

app.set('port', config.port);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode",
        app.get('port'), config.env
    );
});
