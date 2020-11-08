import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Document from '../views/Document'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path:'/document', name: 'Document', component: Document}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
