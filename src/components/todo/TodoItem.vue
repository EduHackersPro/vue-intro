<template>
  <a
    class="list-group-item"
    v-text="task.title"
    href="javascript:;"
    @click="doTask"
  ></a>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },

  methods: {
    doTask() {
      // TODO: уйти от eventbus на работу со store
      // this.$emit("change", this.task);
      // TODO: удалить полностью из приложения eventbus
      window.eventbus.$emit("todo-item-change", this.task);
    }
  }
};
</script>

<style>
</style>