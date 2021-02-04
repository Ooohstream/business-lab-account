<template>
  <router-link to="/register">Register</router-link>
  <router-link to="/login">Login</router-link>
  <router-view></router-view>
</template>


<script>
export default {
  name: "mainwrapper",
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
</style>
