import { createMemoryHistory, createRouter } from 'vue-router'
// Import your Views here
import Home from '../views/Home.vue'

// Import other components
import Posts from '../components/Posts.vue'
import Comments from '../components/Comments.vue'
import Albums from '../components/Albums.vue'
import Todos from '../components/Todos.vue'
import Photos from '../components/Photos.vue'
import Put from '../components/Put.vue'

const routes = [
  { path: '/', component: Home },
  {path: '/Posts', component: Posts },
  {path: '/Comments', component: Comments },
  {path: '/Albums', component: Albums },
  {path: '/Todos', component: Todos },
  {path: '/Photos', component: Photos },
  {path: '/Put', component: Put },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router