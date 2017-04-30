import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/main-page'
import unionPage from '@/union-page'
import adminCenterPage from '@/admin-center-page'
import appMarketPage from '@/app-market-page'
import distributionFLowPage from '@/distribution-flow-page'
import documentDistributionPage from '@/document-distribution-page'
import isoComunityPage from '@/iso-community-page'
import videoPage from '@/video-page'
import appMarket from '@/components/main-page-components/app-market'
import openDocument from '@/components/main-page-components/open-document'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main page',
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
          path: '',
          name: 'open document',
          component: openDocument
        }
      ]
    },
    {
      path: '/union',
      name: 'union page',
      component: unionPage
    },
    {
      path: '/admin-center',
      name: 'admin center page',
      component: adminCenterPage
    },
    {
      path: '/app-market-page',
      name: 'app market page',
      component: appMarketPage
    },
    {
      path: '/distribution-flow',
      name: 'distribution flow page',
      component: distributionFLowPage
    },
    {
      path: '/iso-community',
      name: 'iso community page',
      component: isoComunityPage
    },
    {
      path: '/document-distribution',
      name: 'document distribution page',
      component: documentDistributionPage
    },
    {
      path: '/video',
      name: 'video page',
      component: videoPage
    }
  ]
})
