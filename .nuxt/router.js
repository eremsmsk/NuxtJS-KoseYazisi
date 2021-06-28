import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _272dc40c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _9ca22a14 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _23a84335 = () => interopDefault(import('..\\pages\\admin\\new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _2ee4d620 = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _f4a036b8 = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _b895ccea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _272dc40c,
    name: "admin"
  }, {
    path: "/posts",
    component: _9ca22a14,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _23a84335,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _2ee4d620,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _f4a036b8,
    name: "posts-postId"
  }, {
    path: "/",
    component: _b895ccea,
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
