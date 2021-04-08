import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import HabitApp from '../views/HabitApp.vue'
import FitnessApp from '../views/FitnessApp.vue'
import ContactSuccess from '../views/ContactSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/habit-app',
    name: 'HabitApp',
    component: HabitApp
  },
  {
    path: '/fitness-app',
    name: 'FitnessApp',
    component: FitnessApp
  },
  {
    path: '/gamification-app',
    name: 'GamificationApp',
    component: Contact
  },
  {
    path: '/contact-success',
    name: 'ContactSuccess',
    component: ContactSuccess
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
