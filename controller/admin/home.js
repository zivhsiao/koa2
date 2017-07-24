'use strict';
// const Admin = require('../models/admin.js');

/**
 * 管理员登录
 * @param ctx
 */
exports.getLogin = async (ctx) => {
    await ctx.render('admin/home', {
        title: '首頁',
    });
};
