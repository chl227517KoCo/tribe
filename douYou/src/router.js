/**
 * Created by banana.cao on 2018/8/21.
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('./pages/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['./pages/home/index.vue'], resolve),
        meta:{index:0}
      },
      {
        path: '/video',
        name: 'video',
        component: resolve => require(['./pages/video/index.vue'], resolve),
        meta:{index:1}
      },
      {
        path: '/novel',
        name: 'novel',
        component: resolve => require(['./pages/novel/index.vue'], resolve),
        meta:{index:2}
      },
      {
        path: '/date',
        name: 'date',
        component: resolve => require(['./pages/date/index.vue'], resolve),
        meta:{index:3}
      },
      {
        path: '/user',
        name: 'user',
        component: resolve => require(['./pages/user/index.vue'], resolve),
        meta:{index:3}
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./pages/login/index.vue'], resolve),
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['./pages/register/index.vue'], resolve),
  },
];


const router = new Router({ routes });
export {
  router
}
