<!--Created by sigarachi-->
<template>
    <PostLst :posts="posts"/>
</template>


<script>
import PostLst from "@/components/PostLst";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Home",
  components:{
    PostLst
  },
  data: () => ({
    
  }),
  mounted(){
    const token = localStorage.getItem('access_token')
    this.fetchPosts(token)
    console.log(this.$store)
  },
  computed:{
    ...mapGetters({
      posts: "posts",
    })
  },
  methods:{
    ...mapActions({
      fetchPosts: "fetchPosts",
    })
  }
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