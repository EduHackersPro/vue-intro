import { TODO_ADD_ITEM, TODO_REMOVE_ITEM, TODO_TOGGLE_ITEM } from '../mutations'

const state = {
  list: [],
}

// TODO: Добавить возможность смены статуса конкретной задачи
const mutations = {
  [TODO_ADD_ITEM](state, item) {
    state.list.push(item)
  },

  [TODO_TOGGLE_ITEM](state, item) {
    item.isDone = true
  },

  // TODO: Добавить возможность удаления конкретной задачи
  [TODO_REMOVE_ITEM](state, item) {
    const index = state.list.indexOf(item)
    if (index !== -1) {
      state.list.splice(index, 1)
    }
  },
}

export default { state, mutations }
