import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/main-page'
import appMarket from '@/components/app-market'
import openDocument from '@/components/open-document'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: mainPage,
      children: [
        {
          path: 'open-document',
          name: 'open document',
          component: openDocument
        },
        {
          path: 'app-market',
          name: 'app market',
          component: appMarket
        },
        {
          path: '*',
          name: 'open document',
          component: openDocument
        }
      ]
    }
  ]
})
