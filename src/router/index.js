import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from "@/views/ArtistView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/artists',
    name: 'artists',
    component: ArtistView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
