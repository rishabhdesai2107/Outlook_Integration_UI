import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dash_Board.vue'
import Accounts from '../components/Accounts.vue'
import Calendar from '../components/Calendar_page.vue'
import Emails from '../components/Emails_page.vue'
import Tasks from '../components/Tasks_page.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Accounts',
    name: 'Accounts',
    component: Accounts,
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/Emails',
    name: 'Emails',
    component: Emails,
  },
  {
    path: '/Tasks',
    name: 'Tasks',
    component: Tasks,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
