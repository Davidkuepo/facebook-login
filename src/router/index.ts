import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'App',
        component: (): string =>
            "../App.vue"
    },
    {
        path: '/hello',
        name: 'Hello',
        component: ()=>
              "../views/login.vue"
    },
],
})

export default router
