import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/square',
      children: [
        {
          name: 'square',
          path: 'square',
          component: ()=> import('./components/Square.vue')
        },
        {
          name: 'rectangle',
          path: 'rectangle',
          component: ()=> import('./components/Rectangle.vue')
        },
        {
          name: 'rectangle',
          path: 'rectangle',
          component: ()=> import('./components/Rectangle.vue')
        },
        
      ]
    },
  ]
})
