const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/pages/auth/login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/pages/dashboard.vue')
    },
]

export default routes;