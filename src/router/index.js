import { createRouter, createWebHistory } from 'vue-router'

import FrontendLayout from '@/layouts/frontend/FrontendLayout.vue'
import BackendLayout from '@/layouts/backend/BackendLayout.vue'

// Frontend Pages
import Home from '@/views/frontend/home/Home.vue'
import About from '@/views/frontend/about/About.vue'

// Backend Pages
import Dashboard from '@/views/backend/dashboard/Dashboard.vue'
import Setting from '@/views/backend/settings/Settings.vue'

const routes = [
  {
    path: '/',
    component: FrontendLayout, 
    children: [
      { path: '', component: Home },    
      { path: 'about', component: About },
    ],
  },
  {
    path: '/admin',
    component: BackendLayout,
    children: [
      { path: '', component: Dashboard },  
      { path: 'setting', component: Setting }, 
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
