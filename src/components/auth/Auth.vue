<template>
  <div>
    <router-view :email="email" @filledEmail="persistEmail"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    // TODO: сделать сохранение email'а введенного в дочерних компонентах
    // без использования глобальной шины событий
    email: null
  }),

  methods: {
    persistEmail(_email) {
      this.email = _email;
    }
  }
};
</script>

<style>
</style>