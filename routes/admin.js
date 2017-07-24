'use strict';
import Router from 'koa-router'
const admin = require('../controller/admin');


const router = new Router({
    prefix: '/admin'
})

router
  .get('/', admin.getLogin)


export default router
