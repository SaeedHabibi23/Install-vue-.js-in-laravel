import { createRouter, createWebHistory } from 'vue-router'
import firstPage from './components/pages/newpage.vue'
import secondPage from './components/pages/pagetwo.vue'
import hooks from './components/pages/basic/hooks.vue'

export const routes = [
  {
    name: 'home' , 
    path:'/' , 
    component: firstPage , 
   
  },
  {
    name: 'secondpage' , 
    path:'/secondpage' , 
    component: secondPage
  },
  {
    name: 'hooks' , 
    path:'/hooks' , 
    component: hooks
  },
]

const router = createRouter({
  history: createWebHistory() ,
  routes: routes
})

export default router
