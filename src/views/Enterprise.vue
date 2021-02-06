<!--Created by sigarachi-->
<template>
  <div class="landing__page">
    <div class="container">
      <div class="content__head">
        <div class="img__block">
          <img src="@/assets/logo.png" />
        </div>
        <div class="content__header">
          <h4>{{ ent.title }}</h4>
          <h3><a href="http://78.142.222.201:80/user/{{ ent.author }}">Автор</a></h3>
        </div>
      </div>
      <div class="post__content">
        <div class="content__main">
          <div class="description">
            <h4>Description</h4>
            <p>
              {{ ent.content }}
            </p>
          </div>
          <hr />
          <div class="stages">
            <h4 class="h__stages">Stages</h4>
            <div class="stage__lst" v-for="(stage, key) in ent.stages" :key="key">
              <div :class="stage.state">
                <div class="pre_line"></div>
                <div class="point">
                  <div class="stage__name">
                    <h4>{{ stage.name }}</h4>
                  </div>
                  <div class="stage__description">
                    <p>{{ stage.description }}</p>
                  </div>
                </div>
                <div class="post_line"></div>
              </div>
            </div>
            <br />
          </div>
          <div class="team">
            <h4>Team</h4>
            <div class="team__lst" v-for="(mate, key) in ent.team" :key="key">
              <div class="mate__avatar">
                <img src="@/assets/logo.png" />
              </div>
              <div class="mate__about">
                <div class="name" v-if="ent.author == mate">
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Автор</a></h4>
                </div>
                <div v-else>
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Участник</a></h4>
                </div>
                <div class="status">
                  {{ mate.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div class="right__navbar">
      <div class="created__at">
        <h4>Дата создания</h4>
        <p>{{ ent.createdAt }}</p>
      </div>
      <div class="our__challengers">
        <h4>Уже участвуют {{ ent.team.length }}</h4>
        <div
          class="lst__item"
          v-for="(mate, key) in ent.team.slice(0, 3)"
          :key="key"
        >
          <div class="mate__avatar">
            <img src="@/assets/logo.png" />
          </div>
          <div class="mate__about">
            <div class="name" v-if="ent.author == mate">
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Автор</a></h4>
            </div>
            <div v-else>
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Участник</a></h4>
            </div>
            <div class="status">
              {{ mate.status }}
            </div>
          </div>
        </div>
      </div>
      <div class="join__btn">
        <button class="btn btn-primary" v-on:click="join">Присоединиться</button>
      </div>
      <div class="slider">
        <input
          type="radio"
          value="About"
          id="About"
          name="slider"
          class="slider__component"
          v-on:change="onCheck"
          checked="true"
        />
        <label for="About">About</label>
        <br />
        <br />
        <br />
        <input
          type="radio"
          value="Posts"
          name="slider"
          class="slider__component"
          v-on:change="onCheck"
        />
        <label for="Post">Post</label>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
//import axios from "axios";

//let about = true;

export default {
  name: "Enterprise",
  props: {
    ent:{
      type: Object
    },
    teamData:{
      type: Array
    }
  },
  components:{
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
$bluish: #4b6deb;
$grayish: rgb(237, 237, 237);
$bcolor: #9de2ff;

.landing__page {
  display: flex;
  .right__navbar {
    right: 10px;
    margin-right: 70px;
    margin-top: 292px;
    width: 20%;
    height: 400px;
    .lst__item {
      margin-top: 30px;
      display: flex;
      .mate__avatar img {
        width: 70px;
        height: 70px;
      }
      .mate__about {
        margin-top: 15px;
        margin-left: 30px;
      }
    }
    .join__btn {
      margin-top: 20px;
    }
  }

  .created__at {
    margin-bottom: 15px;
    p {
      margin-top: 7px;
      font-weight: 50;
      color: gray;
    }
  }
  .slider {
    margin-top: 20px;
    display: block;
    font-size: 14pt;
    input[type="radio"] {
      opacity: 0;
      position: absolute;
      padding-top: 20px;
    }
    label {
      width: 100px;
      height: 80px;
    }
    input[type="radio"]:focus + label {
      background: $bcolor;
      width: 100px;
      height: 80px;
    }
    .slider__component {
      margin-bottom: 20px;
    }
  }
}

.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  padding-top: 70px;
  left: 10%;
  width: 50%;
  display: block;
  justify-content: space-between;
  .img__block {
    width: 30%;
    margin-top: 84px;
    margin-left: 30px;
  }
  .content__head {
    display: flex;
    height: 230px;
    margin-bottom: 30px;
    border-bottom: 0.3px solid gray;
    .content__header {
      position: absolute;
      top: 158px;
      left: 25%;
      font-size: 20pt;
    }
  }
  .post__content {
    .content__main {
      margin-bottom: 20px;
    }
    .content__footer {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .description {
      margin-bottom: 30px;
    }
    .h__stages {
      margin-top: 20px;
      margin-left: 10px;
    }
  }
  p {
    margin-top: 5px;
  }

  .stages {
    display: block;
    height: 600px;
    border-bottom: 0.3px solid gray;
    .stage__lst {
      display: flex;
      margin-top: 50px;
      margin-bottom: 50px;
      text-align: center;
      flex: 1;
      .point {
        width: 70px;
        height: 70px;
        border: 1px solid transparent;
        border-radius: 35px;
        background: $grayish;
        z-index: 1;
        -webkit-box-shadow: 0px 18px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 18px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 18px 8px 0px rgba(34, 60, 80, 0.2);
        .stage__name,
        .stage__description {
          margin-left: 100px;
        }
        .stage__name {
          margin-top: 10px;
        }
      }
      .completed {
        .point {
          background: $bluish;
        }
      }
      .current {
        .point {
          border: 1px solid $bcolor;
        }
      }
      .pre_line,
      .post_line {
        height: 100%;
        width: 1px;
        background: $grayish;
        margin-left: 50%;
        z-index: 0;
      }
      .completed {
        .pre_line,
        .post_line {
          background: $bluish;
        }
      }
      .current {
        .pre_line {
          background: $bluish;
        }
      }
    }
  }

  .team {
    margin-top: 30px;

    .team__lst {
      margin-top: 20px;
      display: flex;
      .mate__avatar img {
        width: 70px;
        height: 70px;
      }
      .mate__about {
        margin-top: 15px;
        margin-left: 30px;
      }
    }
  }
}
</style>