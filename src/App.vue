<template>
  <div id="app">
    <toast position="ne"></toast>
    <div
      class="d-flex navbar navbar-dark flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom shadow-sm"
    >
      <router-link to="/" class="logo my-0 mr-md-auto">Simple Todo</router-link>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-white" to="/">О сервисе</router-link>
      </nav>
      <template v-if="isNotLoggedIn">
        <router-link class="btn btn-link text-white" :to="{ name: 'login' }"
          >Вход</router-link
        >
        <router-link class="btn btn-primary ml-2" :to="{ name: 'signup' }"
          >Регистрация</router-link
        >
      </template>
      <template v-if="isLoggedIn">
        <a class="btn btn-link text-white" href="javascript:;" @click="logout"
          >Выход</a
        >
        <router-link class="btn btn-primary ml-2" :to="{ name: 'todo-app' }"
          >Списки дел</router-link
        >
      </template>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_LOGOUT } from './store/actions'
import { Toast } from 'vuex-toast'

export default {
  components: {
    Toast,
  },

  computed: {
    ...mapGetters(['isLoggedIn', 'isNotLoggedIn']),
  },

  methods: {
    ...mapActions([USER_LOGOUT]),

    logout() {
      this[USER_LOGOUT]()
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar {
  color: #fff;
}
.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  &:hover {
    color: white;
  }
}
</style>
