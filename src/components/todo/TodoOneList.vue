<template>
  <div class="list-view">
    <div class="container">
      <h1>
        <small>Список дел</small><br />
        <span v-text="todoList.title"></span>
      </h1>
      <div class="form-group">
        <label for="new-task-title">Что нужно сделать?</label>
        <input
          class="form-control"
          :class="{
            'is-valid': canCreateTask,
            'is-invalid': isInvalidNewTitleInput,
          }"
          type="text"
          id="new-task-title"
          v-model="newTaskTitle"
          @keyup.enter="createTask"
        />
        <span>Символов осталось: {{ availableTaskTitleLength }}</span>
      </div>
      <todo-list :tasks="undoneTasks" type="new"></todo-list>
      <todo-list :tasks="doneTasks" type="done"></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
import { mapMutations, mapGetters } from 'vuex'
import { TODO_ADD_ITEM } from './../../store/mutations'
import store from '../../store'
import { FETCH_TODO_LIST } from '../../store/actions'

const MAX_TASK_TITLE_LENGTH = 100

async function fetchData(to, from, next) {
  const id = to.params.list
  await store.dispatch(FETCH_TODO_LIST, id)
  next()
}

export default {
  beforeRouteEnter: fetchData,
  beforeRouteUpdate: fetchData,

  components: {
    TodoList,
  },

  data: () => ({
    newTaskTitle: '',
  }),

  computed: {
    ...mapGetters({
      /**
       * Список задач
       */
      todoList: 'getOneList',
    }),

    /**
     * Список задач
     */
    tasks() {
      return [].concat(this.todoList.items)
    },

    /**
     * Список невыполненных задач
     */
    undoneTasks() {
      return this.tasks.filter(task => !task.isDone)
    },

    /**
     * Список сделанных задач
     */
    doneTasks() {
      return this.tasks.filter(task => task.isDone)
    },

    /**
     * Заголовок задачи невалиден?
     */
    isInvalidNewTitleInput() {
      return this.newTaskTitle.length > 0 && !this.canCreateTask
    },

    /**
     * Сколько символов ещё можно написать в заголовке задачи
     */
    availableTaskTitleLength() {
      const availableLength = MAX_TASK_TITLE_LENGTH - this.newTaskTitle.length
      if (availableLength >= 0) {
        return availableLength
      }
      return 0
    },

    /**
     * Могу ли добавить новую задачу
     */
    canCreateTask() {
      if (this.newTaskTitle.length > 0 && this.availableTaskTitleLength > 0) {
        return true
      }
      return false
    },
  },

  methods: {
    ...mapMutations([TODO_ADD_ITEM]),

    /**
     * Создание новой задачи
     */
    createTask() {
      if (!this.canCreateTask) return

      const newTask = {
        isDone: false,
        title: this.newTaskTitle,
      }

      this[TODO_ADD_ITEM](newTask)

      this.newTaskTitle = ''
    },
  },
}
</script>

<style>
.list-view {
  text-align: left;
}
</style>
