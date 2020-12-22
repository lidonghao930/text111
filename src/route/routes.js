import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Regiseter from '@/pages/Regiseter'
export default [{
        path: '/?happy=123',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/regiseter',
        component: Regiseter
    },
    {
        path: '/',
        redirect: Home
    }
]