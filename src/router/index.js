import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Posts from '@/pages/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
