import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/main-page'
import unionPage from '@/union-page'
import introduction from '@/components/union-page-components/introduction'
import service from '@/components/union-page-components/service'
import activity from '@/components/union-page-components/activity'

import members from '@/components/union-page-components/members'
import adminCenterPage from '@/admin-center-page'
import techCenter from '@/components/admin-center-page-components/tech-center'
import adminCenter from '@/components/admin-center-page-components/admin-center'
import appMarketPage from '@/app-market-page'
import distributionFLowPage from '@/distribution-flow-page'
import documentDistributionPage from '@/document-distribution-page'
import isoComunityPage from '@/iso-community-page'
import dicussion from '@/components/iso-community-page-components/discussion'
import repos from '@/components/iso-community-page-components/repos'


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
      component: unionPage,
      children: [
        {
        path: 'introduction',
        name: 'introduction',
        component: introduction,
        },
        {
        path: 'service',
        name: 'service',
        component: service,
        },
        {
        path: 'activity',
        name: 'activity',
        component: activity,
        },
      {
        path: 'members',
        name: 'members',
        component: members
      },
      {
        path: '',
        component: introduction
      }
      ]
    },
    {
      path: '/admin-center',
      name: 'admin center page',
      component: adminCenterPage,
      children: [
        {
          path: 'tech-center',
          name: 'tech center',
          component: techCenter
      },
        {
          path: 'admin-center',
          name: 'admin center',
          component: adminCenter
      }
      ]
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
      component: isoComunityPage,
      children: [
        {
          path: 'discussion',
          name: 'discussion',
          component: dicussion
        },
        {
          path: 'repos',
          name: 'repos',
          component: repos
        }
      ]
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
