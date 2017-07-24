'use strict';
const schedule = require('node-schedule');
const superagent = require('superagent-promise')(require('superagent'), Promise);
const cheerio = require('cheerio');
const percent = require('cpu-percent')
const memStat = require('mem-stat');
const diskspace = require('diskspace');
// let cpu = gauge.start();
let percentStat = '';
let total_disk = '';
let used_disk = '';
let free_disk = '';
let usage = '';

exports.matches = ()=> {
  return usage;
};


const cpu_usage = async() => {
    console.log('start update cpu usage, time：' + new Date());

    // let cpu_percent = cpu.usage().percent;
    let memory_mb = memStat.usedPercent();

    let data = [];
    data[0]= memory_mb;


    percent.pid(process.pid, function(err, percent){

        percentStat = percent;

        return percentStat;
    })

    diskspace.check('/', function (err, result) {
        total_disk = result.total;
        used_disk = result.used;
        free_disk = result.free;
        return result;
    })
    data[1] = (percentStat > 100 ? 100: percentStat);
    data[2] = total_disk;
    data[3] = used_disk;
    data[4] = free_disk;

    usage = data;
}


exports.update = async()=> {
  cpu_usage();
}
