import { createRouter, createWebHistory } from 'vue-router'
import firstPage from './components/pages/newpage.vue'
import secondPage from './components/pages/pagetwo.vue'

export const routes = [
  {
    name: 'home' , 
    path:'/' , 
    component: firstPage
  },
  {
    name: 'secondpage' , 
    path:'/secondpage' , 
    component: secondPage
  },
  
]

const router = createRouter({
  history: createWebHistory() ,
  routes: routes
})

export default router
