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
            'is-invalid': isInvalidNewTitleInput
          }"
          type="text"
          id="new-task-title"
          v-model="newTaskTitle"
          @keyup.enter="createTask"
        />
        <span>Символов осталось: {{ availableTaskTitleLength }}</span>
      </div>
      <todo-list :tasks="undoneTasks" type="new" />
      <todo-list :tasks="doneTasks" type="done" />
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";
import { mapMutations } from "vuex";
import { TODO_ADD_ITEM } from "./../../store/mutations";

const MAX_TASK_TITLE_LENGTH = 100;

export default {
  components: {
    TodoList
  },

  data: () => ({
    newTaskTitle: ""
    // tasks: []
  }),

  computed: {
    tasks() {
      return [].concat(this.$store.state.todo.list);
    },

    yourTasksTitle() {
      if (this.undoneTasks.length === 0) {
        return "Новых задач нет";
      }
      return "Ваши задачи";
    },

    undoneTasks() {
      return this.tasks.filter(task => !task.isDone);
    },

    doneTasks() {
      return this.tasks.filter(task => task.isDone);
    },

    isInvalidNewTitleInput() {
      return this.newTaskTitle.length > 0 && !this.canCreateTask;
    },

    availableTaskTitleLength() {
      const availableLength = MAX_TASK_TITLE_LENGTH - this.newTaskTitle.length;
      if (availableLength >= 0) {
        return availableLength;
      }
      return 0;
    },

    canCreateTask() {
      if (this.newTaskTitle.length > 0 && this.availableTaskTitleLength > 0) {
        return true;
      }
      return false;
    }
  },

  mounted() {
    // TODO: уйти от eventbus полностью его удалив
    // window.eventbus.$on("todo-item-change", this.changeTask);
  },

  methods: {
    ...mapMutations([TODO_ADD_ITEM]),

    createTask() {
      if (!this.canCreateTask) return;
      const newTask = {
        isDone: false,
        title: this.newTaskTitle
      };

      this[TODO_ADD_ITEM](newTask);

      this.newTaskTitle = "";
    },
  }
};
</script>

<style>
.list-view {
  text-align: left;
}
</style>
