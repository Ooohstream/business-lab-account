<template>
  <div class="main">
    <nav v-if="$route.name != 'Login'">
      <ul>
        <li>
          <router-link :to="{ name: 'UserProfile', params: { userId: userId } }"
            ><img
              src="@/assets/icons/profile-pic.png"
              style="background: white"
          /></router-link>
        </li>
        <li>
          <router-link to="/homepage"
            ><img src="@/assets/icons/homepage.png"
          /></router-link>
        </li>
        <li>
          <router-link to="#"
            ><img src="@/assets/icons/board.png"
          /></router-link>
        </li>
        <li class="exit">
          <a @click="logout"
            ><img class="exit" src="@/assets/icons/exit.png"
          /></a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>


<script>
//import PostLst from "@/components/PostLst";

export default {
  name: "App",
  data() {
    return {
      userId: this.$store.getters.getUserId,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
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
      display: flex;
      flex-direction: column;

      img {
        height: 45px;
        margin-top: 2em;
        border-radius: 2em;
      }

      li.exit {
        margin-top: auto;
      }
      img.exit {
        border-radius: 0;
      }
    }
  }
}
</style>
