import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Posts from '../components/Posts.vue'
import Comments from '../components/Comments.vue'
import Albums from '../components/Albums.vue'
import Todos from '../components/Todos.vue'
import Photos from '../components/Photos.vue'



const routes = [
  { path: '/', component: Home },
  {path: '/Posts', component: Posts },
  {path: '/Comments', component: Comments },
  {path: '/Albums', component: Albums },
  {path: '/Todos', component: Todos },
  {path: '/Photos', component: Photos },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router