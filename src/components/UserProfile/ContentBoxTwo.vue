<template>
  <div class="content-box-2">
    <h2>Активность:</h2>
    <ul>
      <li>
        <div v-for="(post, index) in posts" :key="index" class="containerm">
          <div class="message-body">
            <p>1</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: [],
  },
};
</script>

<style lang="scss" scoped>
div {
  border: none;
}

/* Message box starts here */
.containerm {
  clear: both;
  position: relative;
}

.containerm .message-body {
  float: left;
  width: 300px;
  height: auto;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 6px 8px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}

.containerm .message-body p {
  margin: 0;
}

h2 {
  margin: 0.5em;
}
</style>