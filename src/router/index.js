import Vue from 'vue'
import Router from 'vue-router'
import container from '../page/index'
import sale from '../page/sale/router/route'
import manage from '../page/manage/router/route'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    },
     sale,
     manage
  ]
})