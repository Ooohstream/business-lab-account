<template>
  <div class="login">
    <section class="left"></section>
    <section class="right">
      <form @submit.prevent="login">
        <div v-if="!loggedIn" class="logo"><img src="@/assets/logo.png" /></div>
        <div class="username-password">
          <input
            type="text"
            class="input-text"
            placeholder="Телефон или email"
            v-model="username"
          />
          <input
            type="password"
            class="input-text"
            placeholder="Пароль"
            v-model="password"
          />
        </div>
        <div class="forget-submit">
          <a href="#">Забыли пароль?</a>
          <input
            type="submit"
            value="Войти →"
            class="btn btn-primary --blue-shadow"
          />
        </div>
        <div class="need-registration">
          <span> Нет акканта? </span>
          <a class="btn btn-primary-outline">Регистрация</a>
          <a class="btn btn-danger-outline" @click="logout">Logout--test</a>
        </div>
      </form>
    </section>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style lang="scss">
$font-stack: Arial, "Helvetica Neue", Helvetica, sans-serif;
$whitish: #fafafa;
$bluish: #4b6deb;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-stack;
  width: 100%;
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

.login {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  background: $whitish;

  section.left {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background: $bluish;
  }

  section.right {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 30%;
      height: 50%;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      .logo {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 90px;
        }
      }

      .username-password {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
          margin: 1em;
          width: 70%;
        }
      }

      .forget-submit {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: block;
          font-size: 0.9rem;
          text-decoration: none;
          margin-right: 4em;
          background: none;
          outline: none;
          border: none;

          &:hover {
            color: $bluish;
          }
        }
      }

      .need-registration {
        grid-column: 1 / 2;
        grid-row: 4 / 5;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
          display: block;
          font-size: 0.8rem;
          margin-right: 5em;
        }

        a {
          display: block;
          font-size: 0.8rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .login {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;

    section.left {
      display: none;
    }

    section.right {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      form {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
