import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Welcome from './components/pages/Welcome'
import Auth from './components/auth/Auth'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import PasswordReset from './components/auth/PasswordReset'
import Verify from './components/auth/Verify'
import TodoApp from './components/todo/TodoApp'
import Error404 from './components/error/Error404'

import store from './store'

const routes = [
  {
    path: '/',
    component: Welcome,
    name: 'home',
    meta: {
      auth: false,
    },
  },
  {
    component: Auth,
    path: '/auth',
    meta: {
      auth: false,
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          auth: false,
        },
      },
      {
        path: '/signup',
        name: 'signup',
        component: Registration,
        meta: {
          auth: false,
        },
      },
      {
        path: 'password-reset',
        name: 'password-reset',
        component: PasswordReset,
        meta: {
          auth: false,
        },
      },
      {
        path: 'verify',
        name: 'password-verify',
        component: Verify,
        meta: {
          auth: false,
        },
      },
    ],
  },
  {
    path: '/app',
    component: TodoApp,
    name: 'todo-app',
    meta: {
      auth: true,
    },
  },
  {
    path: '/404',
    component: Error404,
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeResolve((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.auth)

  if (requiresAuth) {
    const isLoggedIn = store.getters.isLoggedIn

    if (isLoggedIn) {
      next()
      return
    }
    next('/login')
    return
  }

  next()
})

export default router
