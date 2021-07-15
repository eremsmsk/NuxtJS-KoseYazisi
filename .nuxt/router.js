import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53ef9a9e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _bad25396 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _29d841c4 = () => interopDefault(import('../pages/admin/new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _246ac6dc = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _ee20b340 = () => interopDefault(import('../pages/posts/_postId/index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _215492b1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _53ef9a9e,
    name: "admin"
  }, {
    path: "/posts",
    component: _bad25396,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _29d841c4,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _246ac6dc,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _ee20b340,
    name: "posts-postId"
  }, {
    path: "/",
    component: _215492b1,
    name: "index"
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
