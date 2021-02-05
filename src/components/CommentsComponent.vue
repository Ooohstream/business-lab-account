<template>
  <form @submit.prevent="send__message">
    <div class="input__field">
      <input type="text" id="comment" placeholder="Введите комментарий" />
      <button type="submit">Отправить</button>
    </div>
  </form>
  <div class="comments__wrapper" v-if="postComments.length != 0">
    <div
      class="post__comment"
      v-for="(comment, key) in postComments"
      :key="key"
    >
      <div class="author">{{ comment.author }}</div>
      <div class="comment__message">{{ comment.message }}</div>
    </div>
  </div>
  <div class="comments__else__wrapper" v-else>
    <p>Комментариев нет</p>
  </div>
</template>

<script>
export default {
  name: "CommentsComponent",
  props: {
    postComments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    send__mesage() {
      this.$store.dispatch("input__field", {
        comment: this.comment,
      });
    },
  },
};
</script>

<style lang="scss">
.comments__wrapper {
  margin-top: 20px;
}
.input__field {
  display: flex;
  margin-bottom: 30px;

  input {
    width: 100%;
    border: none;
    border-bottom: 0.3px solid black;
    padding-top: 2px;
    height: 30px;
  }

  button {
    background: none;
    border: none;
    padding-left: 1px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: -70px;
  }

  &:focus,
  :active,
  :hover,
  :enabled,
  ::after {
    border: none;
    outline: none;
  }
  input:active,
  ::after,
  :focus,
  ::before {
    border-bottom: 0.3px solid black;
  }
}
</style>