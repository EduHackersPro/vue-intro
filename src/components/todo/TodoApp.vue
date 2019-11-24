<template>
  <div class="list-view">
    <div class="container">
      <h1>Список дел</h1>
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
import { mapMutations } from 'vuex'
import { TODO_ADD_ITEM } from './../../store/mutations'

const MAX_TASK_TITLE_LENGTH = 100

export default {
  components: {
    TodoList,
  },

  data: () => ({
    newTaskTitle: '',
  }),

  computed: {
    /**
     * Список задач
     */
    tasks() {
      return [].concat(this.$store.state.todo.list)
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
