<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <div class="container">
      <div class="form">
        <div class="form-group">
          <label for="your-name">Как вас зовут?</label>
          <input
            class="form-control"
            type="text"
            id="your-name"
            v-model="myName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },

  data: () => ({
    myName: null
  }),

  watch: {
    myName(newVal) {
      this.$emit("update", newVal);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
