'use strict';
const schedule = require('node-schedule');
const superagent = require('superagent-promise')(require('superagent'), Promise);
const cheerio = require('cheerio');
const memory = require('memory');
let mb = memory();

let usage = '';
exports.matches = ()=> {
    return usage;
};

const memory_usage = async() => {
    console.log('start update cpu usage, time：' + new Date());

    let memort_mb = '';
    memort_mb = mb;


    console.log(memort_mb);
    usage = memort_mb;
}


exports.update = async()=> {
    memory_usage();
}
