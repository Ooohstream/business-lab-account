import axios from 'axios';
import { createStore } from 'vuex';
// import axios from 'axios';

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
        .post('http://192.168.1.65:8888/login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: {
            username: credentials.username,
            password: credentials.password,
          },
        })
        .then(response => {
          const access_token = response.data.token;
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
        .post('http://192.168.1.65:8888/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: {
            username: credentials.username,
            password: credentials.password,
            email: credentials.email,
          },
        })
        .then(response => {
          console.log(response);
          ctx.commit('register', response);
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
