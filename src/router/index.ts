import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:planet',
      component: HomeView,
      props: true
    },
    {
      path: "/",
      redirect: { path: "/Sun" },
      component: HomeView,
      children: [
        {
          path: '/:planet',
          component: HomeView,
          props: true}
      ]
    },
  ],
})

export default router
