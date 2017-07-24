import Router from 'koa-router'
const products = require('../controller/products');


const router = new Router({
  prefix: '/products'
})

router
  .get('/create', products.getCreateProducts)

  /**
   * 这里需要注意的是不要把它放在前面，不然会被它优先捕获了，就没别人什么事了
   */
  .get('/:id', products.readproducts)

  /**
   * 新建主题
   */
  .post('/create', products.createproducts)

  /**
   * 新建回复
   */
  .post('/createReply', products.createReply)

  /**
   * 点赞支持
   */
  .post('/addReplySupport', products.addReplySupport)

  /**
   * 重新编辑主题
   */
  .post('/edit', products.saveproducts)

export default router