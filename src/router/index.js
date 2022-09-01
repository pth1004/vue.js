import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mytest',
    name: 'MyTest',
    component: () => import('../views/MyTest.vue')
  },
  {
    path: '/input-test',
    component: () => import('../views/InputTest.vue')
  },
  {
    path: '/input-test-kor',
    component: () => import('../views/InputTestKor.vue')
  },
  {
    path: '/test-event',
    component: () => import('../views/TestEvent.vue')
  },
  {
    path: '/test-computed',
    component: () => import('../views/TestComputed.vue')
  },
  {
    path: '/test-condition',
    component: () => import('../views/TestCondition.vue')
  },
  {
    path: '/test-loop',
    component: () => import('../views/TestLoop.vue')
  },
  {
    path: '/test-mixin',
    component: () => import('../views/TestMixin.vue')
  },
  {
    path: '/test-bootstrap',
    component: () => import('../views/TestBootstrap.vue')
  },
  {
    path: '/test-comp',
    component: () => import('../views/comp')
  },
  {
    path: '/test-family/props',
    component: () => import('../views/family/props/Parent.vue')
  },
  {
    path: '/test-family/emit',
    component: () => import('../views/family/emit/Parent.vue')
  },
  {
    path: '/test-family/eventBus',
    component: () => import('../views/family/eventBus/Parent.vue')
  },
  {
    path: '/test-user/info',
    component: () => import('../views/user/UserInfo.vue')
  },
  {
    path: '/test-user/list',
    component: () => import('../views/user/UserList.vue')
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
