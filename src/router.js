import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/layout'
Vue.use(Router)

export const constantRouterMap = [{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},
{
  path: '/',
  name: 'home',
  component: Layout,
  redirect: '/home',
  // hidden: true,
  children: [{
    path: 'home',
    component: () => import('@/views/home/Home.vue')
  }]
},
{
  path: '/audioVideo',
  component: Layout,
  redirect: '/audioVideo',
  children: [{
    path: '/',
    name: 'audioVideo',
    component: () => import('@/views/audio-video')
  },
  {
    path: 'prodetail1',
    name: 'prodetail1',
    component: () => import('@/views/audio-video/prodetail1')
  },
  {
    path: 'prodparameters',
    name: 'prodparameters',
    component: () => import('@/components/prod/prodparameters')
  }]
},
{
  path: '/homeOffice',
  component: Layout,
  children: [{
    path: '/',
    name: 'homeOffice',
    component: () => import('@/views/home-office')

  }, {
    path: 'prodetail2',
    name: 'prodetail2',
    component: () => import('@/views/home-office/prodetail2')
  }, {
    path: 'prodparameters',
    name: 'prodparameters',
    component: () => import('@/components/prod/prodparameters')
  }]
},
{
  path: '/auto',
  component: Layout,
  children: [{
    path: '/',
    name: 'auto',
    component: () => import('@/views/auto/index.vue')
  }, {
    path: 'prodetail3',
    name: 'prodetail3',
    component: () => import('@/views/auto/prodetail3')
  }, {
    path: 'prodparameters',
    name: 'prodparameters',
    component: () => import('@/components/prod/prodparameters')
  }]
},
{
  path: '/community',
  component: Layout,
  children: [{
    path: '/',
    name: 'community',
    component: () => import('@/views/community/index.vue')
  }]
},
{
  path: '/aboutUs',
  component: Layout,
  children: [{
    path: '/',
    name: 'aboutUs',
    component: () => import('@/views/aboutUs')
  }]
},
// {
//   path: '/prodparameters',
//   component: Layout,
//   children: [{
//     path: '/',
//     name: 'prodparameters',
//     component: () => import('@/components/prod/prodparameters')
//   }]
// },
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

export default new Router({
  // mode: 'history',
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: constantRouterMap
})
