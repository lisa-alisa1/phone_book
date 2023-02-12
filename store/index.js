import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts.js'
// import Loader from '../components/Loader'
Vue.use (Vuex)

export default () => new Vuex.Store({
    modules: {
        contacts
    },
    // components: {
    //     Loader
    // }
})

// Vue.prototype.$loader = (loader) => {
//     return store.commit('set_loader', loader)
// }