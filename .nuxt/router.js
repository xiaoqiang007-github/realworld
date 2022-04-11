import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70dfbf46 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _62dfe00a = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _03aa37cd = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _c9bb6de6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5a66e93f = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6510e589 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _fc26e74c = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _70dfbf46,
    children: [{
      path: "",
      component: _62dfe00a,
      name: "homeIndex"
    }, {
      path: "/login",
      component: _03aa37cd,
      name: "login"
    }, {
      path: "/register",
      component: _03aa37cd,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _c9bb6de6,
      name: "profile"
    }, {
      path: "/settings",
      component: _5a66e93f,
      name: "settings"
    }, {
      path: "/editor",
      component: _6510e589,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _fc26e74c,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
