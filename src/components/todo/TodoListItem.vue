<template>
  <a
    class="list-group-item"
    v-text="task.title"
    href="javascript:;"
    @click="doTask"
  ></a>
</template>

<script>
import { mapMutations } from 'vuex'
import { TODO_TOGGLE_ITEM, TODO_REMOVE_ITEM } from '../../store/mutations'

/**
 * Элемент списка задач
 */
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations([TODO_TOGGLE_ITEM, TODO_REMOVE_ITEM]),

    /**
     * Обработка выполнения или удаления задачи
     */
    doTask() {
      let action = TODO_REMOVE_ITEM
      if (!this.task.isDone) {
        action = TODO_TOGGLE_ITEM
      }
      this[action](this.task)
    },
  },
}
</script>

<style>
</style>