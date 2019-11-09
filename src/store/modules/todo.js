import { TODO_ADD_ITEM } from '../mutations'

const state = {
  list: [],
}

// TODO: Добавить возможность смены статуса конкретной задачи
// TODO: Добавить возможность удаления конкретной задачи
const mutations = {
  [TODO_ADD_ITEM](state, item) {
    state.list.push(item)
  },
}

export default { state, mutations }
