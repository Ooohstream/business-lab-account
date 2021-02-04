<template>
  <div class="register">
    <form @submit.prevent="register">
      <label>Email</label>
      <input type="email" class="input-text" v-model="email" />
      <label>Password</label>
      <input type="password" class="input-text" v-model="password" />
      <label>Repeat password</label>
      <input type="password" class="input-text" v-model="repeat_password" />
      <label>Username</label>
      <input type="text" class="input-text" v-model="username" />
      <input type="submit" class="btn btn-primary --blue-shadow" />
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
  width: 100%;
  height: 50%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      display: block;
      margin: 1em;
    }

    input[type="submit"] {
      margin-top: 1em;
    }
  }
}
</style>
