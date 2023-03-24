import { createRouter, createWebHashHistory } from 'vue-router'

import FirstPage from '../components/FirstPage.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  { path: '/', component: FirstPage },
  { path: '/todo', component: TodoList },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export  {router}