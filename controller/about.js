'use strict';
const Message = require('../proxy/message');
const updateDOTA2 = require('../common/updateDOTA2');
const mditor = require('mditor');
const parser = new mditor.Parser();
/**
 * 关于页
 * @param ctx
 */
exports.getAbout = async(ctx)=> {
  let noReadMessageCount = {};
  if (typeof ctx.session.user !== 'undefined' && typeof ctx.session.user.id !== 'undefined') {
    //查询未读取的消息数量，这里使用var比较合适
    noReadMessageCount = await Message.getNoReadMessageCountById(ctx.session.user.id);
  }

  let matches = updateDOTA2.matches();
  await ctx.render('about', {
    session: ctx.session,
    title: '關於 - Anywhere Blog',
    noReadMessageCount: noReadMessageCount,
    matches: matches,
  });
};