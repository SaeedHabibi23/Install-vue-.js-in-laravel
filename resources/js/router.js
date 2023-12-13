import { createRouter, createWebHistory } from 'vue-router'
import firstPage from './components/pages/newpage.vue'

const routes = [
  {
    path: '/newrouter',
    component: firstPage
  },
  // این قسمت مسیر پیش‌فرض است. اگر مسیر وارد شده توسط کاربر موجود نباشد، به این مسیر هدایت می‌شود.
//   {
//     path: '/newrouter',
//     mode: 'history'
// }
]

const router = createRouter({
  mode: 'history',
  routes
})

export default router
