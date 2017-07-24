'use strict';
import Koa from 'koa';
const cors = require('koa-cors');
const compress = require('koa-compress');
const json = require('koa-json');
const mount = require('koa-mount');
const views = require('koa-views');
const serve = require('koa-static');
const logger = require('koa-logger');
const convert = require('koa-convert');
const body = require('koa-better-body');
import session from "koa-session2";
// import Store from "./models/store";
const onerror = require('koa-onerror');
const favicon = require('koa-favicon');
const path = require('path');
// const cpu_usage = require('./common/cpu_usage');
// cpu_usage.update();

// import routes
// import course from './routes/course';
// import user from './routes/user';
import admin from './routes/admin';
import api from './routes/api';
import index from './routes/index';

const app = new Koa();
app.use(favicon(__dirname + '/public/favicon.ico'));

onerror(app);

// 設置 Header
app.use(async(ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'node.js + Koa2')
})

// 設置 gzip
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))


// 記錄所用的方法與時間
app.use(convert(logger()))

// session 10 days
app.use(session({
  //store: new Store(),
  maxAge: 1000 * 60 * 60 * 24 * 10,
}));

// 設置跨域
app.use(convert(cors()))

// 使用 JSON
app.use(convert(json()))

// parser body
app.use(convert(body({
  uploadDir: path.join(__dirname, 'uploads'),
  keepExtensions: true
})))

// template engine ex: pug, ejs
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// 靜態文件
// app.use(mount("/", convert(serve(__dirname + '/public/'))))
app.use(convert(require('koa-static2')("/public",__dirname + '/public')));

//路由，Simple MVC
app.use(index.routes())
app.use(api.routes())
app.use(admin.routes())
// app.use(user.routes())
// app.use(topic.routes())
// app.use(course.routes())

app.use(async(ctx) => {
  if (ctx.status === 404) {
    await ctx.render('./error/404');
  }
})


// app.on('error', function(err, ctx){
//     console.error(err);
//     // console.error('server error', err, ctx);
// });

// 監聽 PORT
app.listen(process.env.PORT || 80)

console.log(`Server up and running! On port  ${process.env.PORT || 80} !`);'use strict';