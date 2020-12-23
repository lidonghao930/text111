import Vue from 'vue'
import Vuerouter from 'vue-router'
import routes from './routes'


Vue.use(Vuerouter);
const originPush = Vuerouter.prototype.push;
const originReplace = Vuerouter.prototype.replace;

Vuerouter.prototype.push = function push(location, onResolve, onRejected) {
    if (onRejected || onResolve) {
        return originPush.call(this, location, onResolve, onRejected)
    } else {
        return originPush.call(this, location).catch((error) => {
            if (Vuerouter.isNavigationFailure(error)) {
                return error
            } else
                return Promise.reject(error)
        })
    }
}
Vuerouter.prototype.replace = function replace(location, onResolve, onRejected) {
    if (onRejected || onResolve) {
        return originReplace.call(this, location, onResolve, onRejected)
    } else {
        return originReplace.call(this, location).catch((error) => {
            if (Vuerouter.isNavigationFailure(error)) {
                return error
            } else
                return Promise.reject(error)
        })
    }
    0
}

export default new Vuerouter({
    mode: 'history',
    routes,
})