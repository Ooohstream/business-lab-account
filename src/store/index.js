import { createStore } from 'vuex';
import post from '@/store/post';
import ent from '@/store/enterprise';
import axios from 'axios';

const base_url = '78.142.222.201';
const PORT = '8080';

export default createStore({
  state: {
    access_token: localStorage.getItem('access_token') || null,
    user_Id: localStorage.getItem('user_Id') || null,
  },
  mutations: {
    login(state, access_token, user_Id) {
      state.access_token = access_token;
      state.user_Id = user_Id;
    },

    logout(state) {
      state.access_token = null;
    },
  },
  actions: {
    //ассинхронные, вызывают мутации state-ов

    //АВТОРИЗАЦИЯ

    async login(ctx, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${base_url}:${PORT}/api/auth/login/`, {
            email: credentials.username,
            password: credentials.password,
          })
          .then(response => {
            const access_token = response.data.access_token;
            const user_Id = response.data.userId;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user_Id', user_Id);
            ctx.commit('login', access_token, user_Id);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    //LOGOUT

    async logout(ctx) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_Id');
      ctx.commit('logout');
    },

    //РЕГИСТРАЦИЯ

    async register(ctx, credentials) {
      axios
        .post(`http://${base_url}:${PORT}/api/auth/register/`, {
          email: credentials.email,
          password: credentials.password,
          login: credentials.username,
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    },

    /* ПОЛУЧИТЬ ДАННЫЕ О ПОЛЬЗОВАТЕЛЕ */
  },
  getters: {
    loggedIn(state) {
      return state.access_token != null;
    },

    getUserId(state) {
      return state.user_Id;
    },
  },
  modules: { post, ent },
});
