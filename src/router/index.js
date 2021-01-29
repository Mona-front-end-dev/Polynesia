import Vue from 'vue'
import VueRouter from 'vue-router'
import todolist from '../components/TodolistComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import AddComponent from  '../components/AddComponent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todolist',
    component: todolist
  },
  {
    path:'/about',
    name:'about',
    component: AboutComponent
  },
  {
    path:'/add',
    name:'add',
    component: AddComponent
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
