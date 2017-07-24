'use strict';
const system_usage = require('../middleware/api_system_usage');

/**
 * 关于页
 * @param ctx
 */
exports.getCPUusage = async(ctx)=> {
    system_usage.update();
    let usage = system_usage.matches();
    console.log(system_usage.matches());
    // await ctx.render('api/api', {
    //     api_value: '后台管理',
    // });
   ctx.body = {
     cpu: usage
   }
};