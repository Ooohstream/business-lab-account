<template>
  <div class="register">
    <form @submit.prevent="register">
      <label>@Email</label>
      <input type="email" class="input-text" v-model="email" />
      <label>Пароль</label>
      <input type="password" class="input-text" v-model="password" />
      <label>Повтор пароля</label>
      <input type="password" class="input-text" v-model="repeat_password" />
      <label>Имя пользователя</label>
      <input type="text" class="input-text" v-model="username" />
      <input
        type="submit"
        class="btn btn-primary --blue-shadow"
        value="Зарегистрироваться"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      repeat_password: "",
      username: "",
    };
  },
  methods: {
    register() {
      if (this.username.lenght < 6) {
        alert("Минимальная длина имени пользователя - 6 символов");
        return;
      }

      if (this.password.length < 6) {
        alert("Минимальная длина пароля - 6 символов");
        return;
      }

      if (this.password == this.repeat_password) {
        this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          username: this.username,
        });
      } else alert("Пароли должны совпадать!");
    },
  },
};
</script>

<style lang='scss' scoped>
.register {
  form {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;

    label {
      display: block;
      margin: 1em 0;
    }

    input[type="submit"] {
      margin-top: 2em;
      font-size: 1rem;
      font-weight: 700;
    }
  }
}
</style>
