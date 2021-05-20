import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/mainmenu/Home.vue'
import Contact from '../views/mainmenu/Contact.vue'
import About from '../views/mainmenu/About.vue'
import Imprint from '../views/Imprint.vue'
import HabitStacks from '../views/showroom/HabitStacks.vue'
import DateSaver from '../views/showroom/DateSaver.vue'
import ContactSuccess from '../views/mainmenu/ContactSuccess.vue'
import UxUi from '../views/UxUi.vue'
import Dev from '../views/Dev.vue'
import Other from '../views/Other.vue'
import NavService from '@/services/NavService'
import Portfolio from '@/views/showroom/Portfolio.vue'
import EasyTutor from '@/views/showroom/EasyTutor.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/ux-ui',
        name: 'UxUi',
        component: UxUi
      },
      {
        path: '/other',
        name: 'Other',
        component: Other
      },
      {
        path: '/development',
        name: 'development',
        component: Dev
      }
    ]
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
    path: '/imprint',
    name: 'Imprint',
    component: Imprint
  },
  {
    path: '/habit-stacks',
    name: 'HabitStacks',
    component: HabitStacks
  },
  {
    path: '/date-saver',
    name: 'DateSaver',
    component: DateSaver
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact-success',
    name: 'ContactSuccess',
    component: ContactSuccess
  },
  {
    path: '/easytutor',
    name: 'EasyTutor',
    component: EasyTutor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NavService.setCurrentRoute(to)
  window.scrollTo(0,0) 
  next()
})

export default router
