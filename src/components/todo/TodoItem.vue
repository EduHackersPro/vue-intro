<template>
  <a
    class="list-group-item"
    v-text="task.title"
    href="javascript:;"
    @click="doTask"
  ></a>
</template>

<script>
import { mapMutations } from "vuex";
import { TODO_CHANGESTATE_TASK } from "../../store/mutations";

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations([TODO_CHANGESTATE_TASK]),
    
    doTask() {
      // TODO: уйти от eventbus на работу со store
      // this.$emit("change", this.task);
      // TODO: удалить полностью из приложения eventbus
      //window.eventbus.$emit("todo-item-change", this.task);
      this[TODO_CHANGESTATE_TASK](this.task);
    }
  }
};
</script>

<style>
</style>
