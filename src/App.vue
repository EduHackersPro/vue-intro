<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world :msg="modifiedMessage" @update="update" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",

  components: {
    HelloWorld
  },

  data: () => ({
    message: "Добро пожаловать на курс по Vue.js!!!",
    yourName: ""
  }),

  computed: {
    modifiedMessage() {
      if (this.yourName?.length > 0) {
        return `${this.yourName}, добро пожаловать на курс по Vue.js!!!`;
      }
      return "Добро пожаловать на курс по Vue.js!!!";
    }
  },

  methods: {
    update(_yourName) {
      this.yourName = _yourName;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
