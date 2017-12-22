import Vue from 'vue'
import VueRouter from 'vue-router'
import NewSongs from '@/views/NewSongs'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/newSongs',
    component: NewSongs,
    alias: '/'
  }]
})

export default router
