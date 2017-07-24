import Router from 'koa-router'
const course = require('../controller/course');


const router = new Router({
    prefix: '/course'
})

router
    .get('/', course.readCourseAll)

    .get('/create', course.getCreateCourse)

    /**
     * 这里需要注意的是不要把它放在前面，不然会被它优先捕获了，就没别人什么事了
     */
    .get('/:id', course.readCourse)

    /**
     * 新建主题
     */
    .post('/create', course.createCourse)

    /**
     * 新建回复
     */
    // .post('/createReply', course.createReply)

    /**
     * 点赞支持
     */
    // .post('/addReplySupport', course.addReplySupport)

    /**
     * 重新编辑主题
     */
    .post('/edit', course.saveCourse)

export default router