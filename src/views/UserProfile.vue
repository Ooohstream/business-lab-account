<template>
  <div class="user-profile">
    <div class="cell-1">
      <img src="@/assets/icons/profile-pic.png" />
    </div>
    <div class="cell-2">
      <hr />
      <h1>{{ `${firstName} ${lastName}` }}</h1>
    </div>
    <div class="cell-3">
      <h1>Мои контакты и социальные сети:</h1>
      <hr />
      <span>Телефон: {{ phoneNumber }}</span>
      <span>Email: hackatom@gmail.com</span>
      <div class="socials">
        <a href="#"><img src="@/assets/icons/vk.png" /></a>
        <a href="#"><img src="@/assets/icons/facebook.png" /></a>
        <a href="#"><img src="@/assets/icons/twitter.png" /></a>
        <a href="#"><img src="@/assets/icons/instagram.png" /></a>
      </div>
    </div>
    <div class="cell-4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Василиса",
      lastName: "Пупкина",
      phoneNumber: "8915423456",
    };
  },
};
</script>

<style lang='scss'>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 90%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;

  hr {
    background: $bluish;
  }

  .cell-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 250px;
      border: lightblue solid 0.9px;
      border-radius: 10em;
    }
  }

  .cell-2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
      width: 70%;
      margin-top: 3em;
      margin-bottom: 5em;
    }
  }

  .cell-3 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      margin: 1em auto;
    }
    hr {
      width: 70%;
    }

    span {
      margin: 2.5em;
    }

    .socials {
      img {
        height: 50px;
        margin: 5em 1em;
      }
    }
  }

  .cell-4 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
</style>