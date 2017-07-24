'use strict';
const schedule = require('node-schedule');
const superagent = require('superagent-promise')(require('superagent'), Promise);
const cheerio = require('cheerio');
const gauge = require('cpu-gauge');
var cpu = gauge.start();

let usage = '';
exports.matches = ()=> {
  return usage;
};

const cpu_usage = async() => {
    console.log('start update cpu usage, time：' + new Date());
    // let res = await superagent.get(targetUrl);
    // let $ = cheerio.load(res.text);
    // usage = [];
    let cpu_percent = cpu.usage().percent;
    console.log(cpu_percent);
    usage = cpu_percent;
}


exports.update = async()=> {
  //启动后立即执行一次爬虫
  cpu_usage();
  //每分钟0秒爬一次
  // schedule.scheduleJob('0 * * * * *', function () {
  //   cpu_usage();
  // });
  setInterval(cpu_usage, 3000);
  //5 mins
  // schedule.scheduleJob('30 */5 * * * *',function () {
  //   getMyself();
  // });
}
