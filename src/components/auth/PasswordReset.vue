<template>
  <div class="col-4 login-form">
    <form class="form-signin" _lpchecked="1">
      <img
        class="mb-4"
        src="/docs/4.3/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Восстановление пароля</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input
        v-model="userEmail"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email"
        required=""
        autofocus=""
        autocomplete="off"
        style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;'
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Восстановить пароль
      </button>
      <p class="text-center">
        <router-link :to="{ name: 'login' }">Войти</router-link>
      </p>
      <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
    </form>
  </div>
</template>

<script>
import authMixin from "../../mixins/authMixin";

export default {
  mixins: [authMixin]
};
</script>

<style>
</style>