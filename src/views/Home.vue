<!--Created by sigarachi-->
<template>
  <EntLst :ents="ents" />
</template>


<script>
import EntLst from "@/components/EntLst";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PostLst,
  },
  data: () => ({}),
  mounted() {
    const token = localStorage.getItem("access_token");
    this.fetchPosts(token);
    console.log(this.$store);
  },
  computed: {
    ...mapGetters({
      ents: "ents",
    }),
  },
  methods: {
    ...mapActions({
      fetchEnts: "fetchEnts",
    }),
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
</style>