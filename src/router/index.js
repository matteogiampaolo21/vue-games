import { createRouter, createWebHistory } from 'vue-router';
import HomeViewVue from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:HomeViewVue
    },
    {
      path: '/color-guesser',
      name: 'colorguesser',
      component: () => import("../views/ColorGuessView.vue")
    },
    {
      path:'/connect-four',
      name:'connectfour',
      component: () => import("../views/ConnectFourView.vue")
    },
    
  ]
})

export default router