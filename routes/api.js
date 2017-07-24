'use strict';
import Router from 'koa-router'
const api = require('../controller/api');


const router = new Router({
    prefix: '/api'
})

router
    .get('/', api.getCPUusage)

    .get('/system_usage', api.getCPUusage);


export default router
