/**
 * Миксин для расширения компонентов Login, PasswordReset, Registration
 */
export default {
  props: {
    email: {
      type: String,
      required: false,
      default: '',
    },
  },

  data: () => ({
    userEmail: null, // используется для модели поля ввода email
  }),

  /* 
  // Альтернативный вариант data. В этом случае mounted не нужен
  data: function () {
    return {
      userEmail: this.email
    }
  }, 
  */

  watch: {
    /**
     * Отслеживаем изменения для передачи их наверх событием filledEmail
     * @param {Number} newVal новое значение email
     */
    userEmail(newVal) {
      this.$emit('filledEmail', newVal)
    },
  },

  /**
   * При монтаже компонента заполняем поле userEmail из props
   */
  mounted() {
    this.userEmail = this.email
  },
}
