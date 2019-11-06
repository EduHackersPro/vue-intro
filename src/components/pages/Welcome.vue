<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Simple Todo</h1>
        <p>Ведите свои списки дел и просто двигайтесь к своему успеху!</p>
        <p>
          <router-link
            class="btn btn-primary btn-lg"
            :to="{ name: 'signup' }"
            role="button"
            >Зарегистрироваться »</router-link
          >
        </p>
      </div>
    </div>
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details »</a
            >
          </p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details »</a
            >
          </p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details »</a
            >
          </p>
        </div>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style>
</style>