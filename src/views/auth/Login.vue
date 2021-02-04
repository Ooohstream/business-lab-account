<template>
  <div class="login">
    <section class="left"></section>
    <section class="right">
      <form @submit.prevent="login">
        <div class="logo"><img src="@/assets/logo.png" /></div>
        <div class="username-password">
          <input
            type="text"
            class="input-text"
            placeholder="Email"
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
          <a class="btn btn-primary-outline" @click="openRegister"
            >Регистрация</a
          >
          <modal v-show="isModalVisible" @close="closeRegister" />

          <!-- <a class="btn btn-danger-outline" @click="logout">Logout--test</a> -->
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import modal from "@/components/modal.vue";

export default {
  components: { modal },
  data() {
    return {
      username: "",
      password: "",
      isModalVisible: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push({ path: "/" });
    },
    logout() {
      this.$store.dispatch("logout");
    },

    openRegister() {
      this.isModalVisible = true;
    },

    closeRegister() {
      this.isModalVisible = false;
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
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
          width: 21em;
        }
      }

      .forget-submit {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1em;

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
        margin-top: 2em;

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