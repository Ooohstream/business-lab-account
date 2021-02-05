<template>
  <div class="ent__card">
    <div class="img__block">
      <img src="@/assets/logo.png" />
    </div>
    <div class="informaiton__block">
      <div class="ent__header">
        <h1>{{ title }}</h1>
      </div>
      <div class="ent__details">
        <p>{{ content }}</p>
      </div>
      <div class="ent__footer">
        <button class="btn btn-primary" id="about" v-on:click="goto(id)">
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "0",
    },
  },
  methods: {
    goto(id) {
      window.location.href = "/enterprise/" + id;
    },
  },
};
</script>

<style lang="scss" scoped>
.ent__card {
  display: flex;

  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  height: 200px;

  .img__block {
    min-width: 30%;
    max-width: 30%;
    border-right: 1px solid rgba(207, 207, 207);
    margin-right: 15px;
    img {
      width: 30%;
      margin-top: 50px;
      margin-left: 100px;
    }
  }
  .informaiton__block {
    width: inherit;
    padding: 1rem;
    background: white;
    position: relative;
    justify-content: space-between;
    z-index: 1;

    .ent__header {
      margin-bottom: 10px;
    }

    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: grey;
      margin-top: 10px;
    }
    .ent__footer {
      position: absolute;
      bottom: 10px;
      left: 15px;
      display: flex;
      justify-content: space-between;
      #about {
        margin-left: 450%;
      }
    }
  }

  &:hover {
    border-bottom: 1px lightblue solid;
    box-shadow: 0 3px 7px -1px rgba(195, 233, 255);
    .img__block {
      border-right: 1px solid rgba(195, 233, 255);
    }
  }
}
</style>