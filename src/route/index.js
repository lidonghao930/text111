import Vue from 'vue'
import Vuerouter from 'vue-router'
import routes from './routes'


Vue.use(Vuerouter);


export default new Vuerouter({
    mode: 'history',
    routes,
})