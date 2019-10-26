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
      <div v-show="tasks.length > 0">
        <!-- TODO: Если нет новых задач, но есть сделанные, то нужно выводить сообщение, что Новых задач нет.  -->
        <h2>Ваши задачи</h2>
        <div class="list-group">
          <a
            class="list-group-item"
            v-for="(task, index) in undoneTasks"
            :key="'ti-' + index"
            v-text="task.title"
            href="javascript:;"
            @click="doTask(task)"
          ></a>
        </div>
      </div>
      <div v-show="tasks.length === 0">
        <h2>Задач нет</h2>
      </div>
      <!-- TODO: Показывать только если есть сделанные задачи -->
      <div v-show="tasks.length > 0">
        <h2>Вы сделали</h2>
        <ul class="list-group">
          <!-- TODO: По клику на сделанную задачу – удалять её из массива задач полностью -->
          <li
            class="list-group-item"
            v-for="(task, index) in doneTasks"
            :key="'ti-' + index"
            v-text="task.title"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const MAX_TASK_TITLE_LENGTH = 100;

export default {
  data: () => ({
    newTaskTitle: "",
    tasks: []
  }),

  computed: {
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

  methods: {
    createTask() {
      if (!this.canCreateTask) return;

      this.tasks.push({
        isDone: false,
        title: this.newTaskTitle
      });
      this.newTaskTitle = "";
    },

    doTask(_task) {
      _task.isDone = true;
    }
  }
};
</script>

<style>
.list-view {
  text-align: left;
}
</style>