<template>
  
  <PostLst :posts="posts"/>
  <router-view />
</template>


<script>
import PostLst from "../src/components/layouts/PostLst"
export default {
  name: "mainwrapper",
  modules:{
    PostLst
  },
  data: () => ({
    posts: [
      {title:"Huy", content:"Hey", imageUrl:"sss"}
    ]
  }),
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