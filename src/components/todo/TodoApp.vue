<template>
  <div class="list-view">
    <div class="container">
      <h1>Списки дел</h1>
      <button class="btn btn-sm btn-primary" @click="createTodoList">
        Добавить
      </button>
      <ul>
        <li v-for="(list, index) in todoLists" :key="'tdl-' + index">
          <router-link
            :to="'/todos/' + list.id"
            v-text="list.title"
          ></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from './../../store'
import { FETCH_TODO_LISTS, TODO_LIST_CREATE } from '../../store/actions'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

async function fetchData(to, from, next) {
  await store.dispatch(FETCH_TODO_LISTS)
  next()
}

export default {
  beforeRouteEnter: fetchData,
  beforeRouteUpdate: fetchData,

  computed: {
    /**
     * Списки задач
     */
    todoLists() {
      return this.$store.state.todo.lists
    },
  },

  methods: {
    ...mapActions([TODO_LIST_CREATE, ADD_TOAST_MESSAGE]),

    createTodoList() {
      const listName = window.prompt('Введите название нового списка дел')
      this[TODO_LIST_CREATE](listName).then(() => {
        this[ADD_TOAST_MESSAGE]({
          text: 'Список дел добавлен',
          type: 'success',
        })
      })
    },
  },
}
</script>

<style>
.list-view {
  text-align: left;
}
</style>
