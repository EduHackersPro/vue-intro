<template>
  <div v-show="tasks.length > 0">
    <h2 v-text="yourTasksTitle"></h2>
    <div class="list-group" v-show="tasks.length !== 0">
      <todo-item
        v-for="(task, index) in tasks"
        :key="'ti-' + index"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "new"
    },
    tasks: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    }
  },

  components: {
    TodoItem
  },

  computed: {
    yourTasksTitle() {
      if (this.type === "new") {
        if (this.tasks.length === 0) {
          return "Новых задач нет";
        }
        return "Ваши задачи";
      }
      if (this.type === "done") {
        return "Выполненные задачи";
      }
      return "";
    }
  }
};
</script>

<style>
.list-view {
  text-align: left;
}
</style>