import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Serch from '@/pages/Serch'
import Register from '@/pages/Register'
export default [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/serch/:keyworld?',
        component: Serch,
        name: 'Serch'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/',
        redirect: Home
    }
]