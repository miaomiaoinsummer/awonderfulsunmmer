import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Typelist from './views/Typelist.vue'
import Upload from './views/Upload.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/typelist',
      name:'typelist',
      component:Typelist
    },
    {
      path:'/upload',
      name:'upload',
      component:Upload
    },
  ]
})
