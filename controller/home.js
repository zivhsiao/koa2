'use strict';
// const Topic = require('../proxy/topic');
const Moment = require('moment');
// const User = require('../proxy/user');
// const Message = require('../proxy/message');
const system_usage = require('../middleware/api_system_usage');

Moment.locale('zh-TW');

/**
 * 主页显示
 * @param ctx
 */
exports.getHome = async (ctx) => {

    var result = [1,2,3,4,5,6,7,8,9,10]

    // let matches = system_usage.matches();
    var position = 'home';
    await ctx.render('home', {
        title: 'Store or Somethings',
        session: ctx.session,
        result: result,
        // matches: matches
    });
};