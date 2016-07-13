'use strict';
var soajs = require('soajs');
var config = require('./config.js');
var daemon = new soajs.server.daemon({"config": config});

daemon.init(function () {

    daemon.job('udacD', function (soajs, next) {
        console.log("udac D!")
    });

    daemon.start();
});