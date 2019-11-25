import axios from 'axios'
import {
  TODO_ADD_ITEM,
  TODO_REMOVE_ITEM,
  TODO_TOGGLE_ITEM,
  TODO_SAVE_LISTS,
  TODO_SAVE_ONE_LIST,
} from '../mutations'
import {
  FETCH_TODO_LISTS,
  FETCH_TODO_LIST,
  TODO_ITEM_DO,
  TODO_ITEM_CREATE,
  TODO_LIST_CREATE,
  TODO_LIST_UPDATE,
} from '../actions'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

/* 
const lists = [
  {
    id: 1,
    title: 'Название',
  },
]
*/

const state = () => ({
  lists: [],
  oneList: {
    id: null,
    title: null,
    items: [],
  },
})

const getters = {
  getOneList: state => state.oneList,
}

const actions = {
  [TODO_ITEM_DO]({ commit }, task) {
    let mutation = TODO_TOGGLE_ITEM
    let url = `items/${task.id}`
    if (task.isDone) {
      mutation = TODO_REMOVE_ITEM
      url += '/remove'
    }
    return api.post(url).then(() => {
      commit(mutation, task)
    })
  },

  // TODO: Добавить создание нового элемента с синхронизацией на бэке
  [TODO_ITEM_CREATE](context, payload) {
    console.debug(context, payload)
  },

  // TODO: Добавить создание нового списка дел с синхронизацией на бэке
  [TODO_LIST_CREATE](context, payload) {
    console.debug(context, payload)
  },

  // TODO: Реализовать переименование списка дел с синхронизацией на бэке
  [TODO_LIST_UPDATE](context, payload) {
    console.debug(context, payload)
  },

  /**
   * Получение всех списков дел с сервера
   *
   * @param {*} { commit }
   * @returns {Promise} axios promise
   */
  [FETCH_TODO_LISTS]({ commit }) {
    return api.get('/todos').then(response => {
      commit(TODO_SAVE_LISTS, response.data)
    })
  },

  [FETCH_TODO_LIST]({ commit }, id) {
    const url = `/todos/${id}`

    return api.get(url).then(response => {
      commit(TODO_SAVE_ONE_LIST, response.data)
    })
  },
}

const mutations = {
  [TODO_ADD_ITEM](state, item) {
    state.list.push(item)
  },

  [TODO_TOGGLE_ITEM](state, item) {
    item.isDone = true
  },

  [TODO_REMOVE_ITEM](state, item) {
    const index = state.oneList.items.indexOf(item)
    if (index !== -1) {
      state.oneList.items.splice(index, 1)
    }
  },

  [TODO_SAVE_LISTS](state, payload) {
    state.lists = payload
  },

  [TODO_SAVE_ONE_LIST](state, payload) {
    state.oneList = payload
  },
}

export default {
  actions,
  getters,
  state,
  mutations,
}
