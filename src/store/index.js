import axios from 'axios';
import { createStore } from 'vuex';
// import axios from 'axios';

const base_url = '5414aa6148e0';

export default createStore({
  state: {
    access_token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    login(state, access_token) {
      state.access_token = access_token;
    },

    logout(state) {
      state.access_token = null;
    },
  },
  actions: {
    //ассинхронные, вызывают мутации state-ов

    //АВТОРИЗАЦИЯ

    async login(ctx, credentials) {
      axios
        .post(`http://${base_url}.ngrok.io/api/auth/login/`, {
          email: credentials.username,
          password: credentials.password,
        })
        .then(response => {
          const access_token = response.data.access_token;
          localStorage.setItem('access_token', access_token);
          ctx.commit('login', access_token);
        })
        .catch(error => console.log(error));
    },

    //LOGOUT

    async logout(ctx) {
      localStorage.removeItem('access_token');
      ctx.commit('logout');
    },

    //РЕГИСТРАЦИЯ

    async register(ctx, credentials) {
      axios
        .post(`http://${base_url}.ngrok.io/api/auth/register/`, {
          email: credentials.email,
          password: credentials.password,
          login: credentials.username,
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    },
  },
  getters: {
    loggedIn(state) {
      return state.access_token != null;
    },
  },
  modules: {},
});
