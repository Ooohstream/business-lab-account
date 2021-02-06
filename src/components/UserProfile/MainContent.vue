<template>
  <div class="main-content">
    <img src="@/assets/profile-picture.jpeg" />
    <h1>{{ `${firstName} ${lastName}` }}</h1>
    <hr />
    <p>На проекте с: {{ accountCreated }}</p>
    <p>Возраст: {{ age }}</p>
    <p>Пол: {{ sex }}</p>
    <div class="socials">
      <a :href="vk"><img class="social" src="@/assets/icons/vk.png" /></a>
      <a :href="instagram"
        ><img class="social" src="@/assets/icons/instagram.png"
      /></a>
      <a :href="twitter"
        ><img class="social" src="@/assets/icons/twitter.png"
      /></a>
      <a :href="facebook"
        ><img class="social" src="@/assets/icons/facebook.png"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    accountCreated: String,
    age: Number,
    sex: String,
    vk: String,
    instagram: String,
    twitter: String,
    facebook: String,
  },
};
</script>

<style lang="scss" scoped>
</style>