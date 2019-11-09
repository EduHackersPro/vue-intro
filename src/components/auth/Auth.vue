<template>
  <div>
    <router-view :email="email" @filledEmail="persistEmail"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
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