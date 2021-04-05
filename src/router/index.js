import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import Home from '../views/Home.vue'
import { projectAuth } from '../firebase/config'
import Kontakt from '@/components/Kontakt'

// auth guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logind',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
