<template>
  <div class="main">
    <nav
      :style="{
        visibility: $route.path === '/register' ? 'hidden' : 'visible',
      }"
    >
      <ul
        :style="{ visibility: $route.path === '/login' ? 'hidden' : 'visible' }"
      >
        <li>
          <router-link to="/user:25"
            ><img
              src="@/assets/icons/profile-pic.png"
              style="background: white"
          /></router-link>
        </li>
        <li>
          <router-link to="homepage"
            ><img src="@/assets/icons/homepage.png"
          /></router-link>
        </li>
        <li>
          <router-link to="#"
            ><img src="@/assets/icons/board.png"
          /></router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
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

.main {
  display: grid;
  grid-template-columns: 60px 9fr;
  grid-template-rows: 1fr;
  widows: 100%;
  height: 100%;

  nav {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background: $bluish;

    ul {
      list-style: none;

      img {
        height: 45px;
        margin-top: 2em;
        border-radius: 2em;
      }
    }
  }
}

.none {
  visibility: hidden;
}
</style>
