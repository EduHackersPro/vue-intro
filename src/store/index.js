import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import auth from './modules/auth'
import todo from './modules/todo'

import createPersisteState from 'vuex-persistedstate'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: { auth, todo },
  plugins: [createPersisteState()],
  strict: debug,
})
