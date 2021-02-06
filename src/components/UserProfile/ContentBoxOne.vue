<template>
  <div class="content-box-1">
    <h2>Обо мне:</h2>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    bio: String,
  },
};
</script>

<style>
</style>