import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import AddPost from '../components/AddPost.vue'
import UpdatePost from '../components/UpdatePost.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:slug',
    component: Detail
  },
  {
    path: '/add',
    component: AddPost
  },
  {
    path: '/edit/:slug',
    component: UpdatePost
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})

export default router
