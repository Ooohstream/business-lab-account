<template>
  <div class="user-profile">
    <header><ProgressBar /></header>
    <MainContent
      :firstName="userData.firstName"
      :lastName="userData.lastName"
      :accountCreated="userData.accountCreated"
      :age="userData.age"
      :sex="userData.sex"
      :vk="userData.vk"
      :twitter="userData.twitter"
      :instagram="userData.instagram"
      :facebook="userData.facebook"
    />
    <About
      :school="userData.school"
      :university="userData.university"
      :specialization="userData.specialization"
      :job="userData.job"
    />
    <ContentBoxOne :bio="userData.aboutme" />
    <ContentBoxTwo :posts="userData.posts" />
    <Footer :phone="userData.mobile" :email="userData.email" />
  </div>
</template>

<script>
import axios from "axios";
import ProgressBar from "@/components/UserProfile/ProgressBar.vue";
import MainContent from "@/components/UserProfile/MainContent.vue";
import About from "@/components/UserProfile/About.vue";
import ContentBoxOne from "@/components/UserProfile/ContentBoxOne.vue";
import ContentBoxTwo from "@/components/UserProfile/ContentBoxTwo.vue";
import Footer from "@/components/UserProfile/Footer.vue";

export default {
  components: {
    ProgressBar,
    MainContent,
    About,
    ContentBoxOne,
    ContentBoxTwo,
    Footer,
  },

  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      axios
        .post(`http://78.142.222.201:8080/api/userupdate/alluserinfo`, {
          access_token: localStorage.getItem("access_token"),
          user_id: this.$route.params.userId,
        })
        .then((response) => {
          const userData = response.data.user;
          this.userData = userData;
          console.log(userData);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang='scss'>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.1fr 3fr 3fr 0.5fr;
  grid-gap: 1em;
  height: 95vh;
  width: 95vw;
  margin: auto;

  header,
  div,
  footer {
    border: lavender solid;
  }

  header {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  div.main-content {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    font-size: 100%;
    font-weight: 600;

    img {
      display: block;
      width: 300px;
      border-radius: 10em;
      margin: 2em auto;
    }

    h1 {
      text-align: center;
      word-spacing: 0.5rem;
      margin-top: 0.5em;
    }

    hr {
      width: 50%;
      margin: 1.5em auto;
    }

    p {
      margin-top: 1em;
      text-align: center;
    }

    .socials {
      border: none;
      display: flex;

      a {
        display: inline-block;
        margin: 5em auto;
        img {
          width: 30px;
        }
      }
    }
  }

  div.about {
    grid-column: 2 / 4;
    grid-row: 2 / 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    h2 {
      text-align: center;
    }

    hr {
      width: 50%;
      margin: 1em auto;
    }

    .education {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      border: none;

      .center {
        border: none;
        display: flex;
        justify-content: center;
        margin-top: auto;

        ul {
          list-style: none;
          font-size: 1.1rem;

          li {
            text-align: center;
            margin-top: 1em;
          }
        }
      }
    }

    .work {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      border: none;

      .center {
        border: none;
        display: flex;
        justify-content: center;
        margin-top: auto;

        ul {
          list-style: none;
          font-size: 1.1rem;

          li {
            text-align: center;
            margin-top: 1em;
          }
        }
      }
    }
  }

  div.content-box-1 {
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    font-size: 100%;
    font-weight: 600;
    padding: 1em;

    h2 {
      margin: 0.1em;
    }
  }

  div.content-box-2 {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    overflow: auto;

    ul {
      font-size: 1.5rem;
      li {
        display: inline-block;
      }
    }
  }

  footer {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }
}
</style>