import { USER_AUTH, USER_LOGOUT } from '../actions'
import { DEL_API_TOKEN, SAVE_API_TOKEN, SET_UPDATING } from '../mutations'

const state = {
  api_token: null,
  updating: false,
}

const getters = {
  isLoggedIn: state => !!state.api_token,
  isNotLoggedIn: state => !state.api_token,
}

const actions = {
  [USER_AUTH]({ commit } /* authData */) {
    // return api.auth(authData).then()
    commit('SAVE_API_TOKEN', 1)
  },

  [USER_LOGOUT]({ commit }) {
    commit('DEL_API_TOKEN')
  },
}

const mutations = {
  [SAVE_API_TOKEN](state, token) {
    if (token) {
      state.api_token = token
    }
  },

  [DEL_API_TOKEN](state) {
    state.api_token = null
  },

  [SET_UPDATING](state, updating) {
    state.updating = updating
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
