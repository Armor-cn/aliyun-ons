/**
 * XadillaX created at 2015-12-18 17:24:31 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var config = require("../test/_config");
var Consumer = require("../lib/consumer");

var consumer = new Consumer(
    config.consumerId,
    config.topic,
    "*",
    config.accessKey,
    config.secretKey);

consumer.on("message", function(message, ack) {
    console.log(message);

    setTimeout(function() {
        ack.done();
    }, 1000);
});

console.log("Connecting to Aliyun ONS...");
consumer.init(function() {
    console.log("Initialized.");
    consumer.listen();
    console.log("Listened.");
});
