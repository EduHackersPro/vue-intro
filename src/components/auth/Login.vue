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
      <h1 class="h3 mb-3 font-weight-normal">Вход</h1>
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
      <label for="inputPassword" class="sr-only">Пароль</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Пароль"
        required=""
        autocomplete="off"
        style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
      />
      <p>
        <router-link :to="{ name: 'password-reset' }">Забыл пароль</router-link>
      </p>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Запомнить меня
        </label>
      </div>
      <button
        @click.prevent="signin"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Войти
      </button>
      <p class="text-center">
        <router-link :to="{ name: 'signup' }">Регистрация</router-link>
      </p>
      <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import authMixin from "../../mixins/authMixin";
import { USER_AUTH } from "../../store/actions";

export default {
  mixins: [authMixin],

  data: () => ({
    password: null
  }),

  methods: {
    ...mapActions([USER_AUTH]),

    async signin() {
      await this[USER_AUTH]({
        email: this.userEmail,
        password: this.password
      });
      this.$router.push("/app");
    }
  }
};
</script>

<style>
.login-form {
  margin: auto;
}
</style>