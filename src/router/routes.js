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
    {
        path: '/cuentas-bancarias',
        name: 'cuentas-bancarias',
        component: () => import('../views/pages/bankAccounts/index.vue')
    },
    {
        path: '/cuentas-bancarias/new',
        name: 'cuentas-bancarias-new',
        component: () => import('../views/pages/bankAccounts/edit.vue')
    },
    {
        path: '/cuentas-bancarias/:id',
        name: 'cuentas-bancarias-edit',
        component: () => import('../views/pages/bankAccounts/edit.vue')
    }
]

export default routes;