/**
 * XadillaX created at 2016-06-06 20:19:05 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

try {
    module.exports = require("./_config");
} catch(e) {
    const env = process.env;
    
    module.exports = {
        accessKey: env.ONS_KEY,
        secretKey: env.ONS_SECRET,
        producerId: env.ONS_PRODUCER_ID,
        consumerId: env.ONS_CONSUMER_ID,
        topic: env.ONS_TOPIC
    };
}

let version = process.versions.node;
let suffixes = {
    "4": "4",
    "6": "6",
    "0.10": "010",
    "0.12": "012"
};

let suffix;
for(let key in suffixes) {
    if(!suffixes.hasOwnProperty(key)) continue;
    if(version.indexOf(key) === 0) {
        suffix = suffixes[key];
        break;
    }
}

module.exports.producerId += suffix;
module.exports.consumerId += suffix;
module.topic += suffix;
