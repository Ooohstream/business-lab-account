<template>
  <div class="user-profile">
    <div class="cell-1">
      <img src="@/assets/icons/profile-pic.png" />
    </div>
    <div class="cell-2">
      <h1>{{ `${userInfo.firstName} ${userInfo.lastName}` }}</h1>
      <hr />
    </div>
    <div class="cell-3">
      <h1>Мои контакты и социальные сети:</h1>
      <hr />
      <span>Телефон: {{ userInfo.phoneNumber }}</span>
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
      userInfo: {
        firstName: "Василиса",
        lastName: "Пупкина",
        phoneNumber: "8915423456",
      },
    };
  },
};
</script>

<style lang='scss'>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;

  hr {
    background: $bluish;
  }

  .cell-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;

    img {
      height: 250px;
      border: lightblue solid 0.9px;
      border-radius: 10em;
      margin: auto;
    }
  }

  .cell-2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    text-align: center;

    hr {
      margin-top: 1em;
      width: 70%;
      margin: 1em auto;
    }
  }

  .cell-3 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    h1 {
    }
    hr {
    }

    span {
    }

    .socials {
      img {
        height: 50px;
      }
    }
  }

  .cell-4 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background: wheat;
  }
}
</style>