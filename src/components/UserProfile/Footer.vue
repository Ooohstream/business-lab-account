<template>
  <footer>
    <span v-if="phone || mail">Связаться со мной: </span>
    <p v-if="phone">Телефон: {{ phone }}</p>
    <p v-if="email">Email {{ email }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    phone: String,
    email: String,
  },
};
</script>

<style lang='scss' scoped>
footer {
  text-align: center;
}
</style>