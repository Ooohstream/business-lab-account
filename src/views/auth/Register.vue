<template>
  <div class="register">
    <form>
      <label>Email</label>
      <input type="email" class="input-text" />
      <label>Password</label>
      <input type="password" class="input-text" />
      <label>Password again</label>
      <input type="password" class="input-text" />
      <label>Username</label>
      <input type="text" class="input-text" />
      <input type="submit" class="btn btn-primary --blue-shadow" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.register {
  width: 100%;
  height: 50%;

  form {
    margin-top: 15em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      margin: 1.5em;
    }
  }
}
</style>