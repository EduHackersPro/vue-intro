<template>
  <div class="list-view">
    <div class="container">
      <h1>Списки дел</h1>
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
import store from './../../store'
import { FETCH_TODO_LISTS } from '../../store/actions'

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
}
</script>

<style>
.list-view {
  text-align: left;
}
</style>
