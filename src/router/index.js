import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Battle from '@/components/Battle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/battle',
      name: 'Battle',
      component: Battle
    }
  ]
})
