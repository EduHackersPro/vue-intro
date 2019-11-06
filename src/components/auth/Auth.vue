<template>
  <div>
    <router-view :email="email"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    // TODO: сделать сохранение email'а введенного в дочерних компонентах
    // без использования глобальной шины событий
    email: null
  })
};
</script>

<style>
</style>