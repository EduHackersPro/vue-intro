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
      // this.$emit("change", this.task);
      window.eventbus.$emit("todo-item-change", this.task);
    }
  }
};
</script>

<style>
</style>