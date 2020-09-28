/**
 * 路由初始化
 * @module router/index
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

const router = new Router(routes)

Vue.use(Router)

export default router
