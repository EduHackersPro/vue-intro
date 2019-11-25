<template>
  <a
    class="list-group-item"
    v-text="task.title"
    href="javascript:;"
    @click="doTask"
  ></a>
</template>

<script>
import { mapActions } from 'vuex'
import { TODO_ITEM_DO } from '../../store/actions'

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
    ...mapActions([TODO_ITEM_DO]),

    /**
     * Обработка выполнения или удаления задачи
     */
    doTask() {
      this[TODO_ITEM_DO](this.task)
    },
  },
}
</script>

<style>
</style>