import axios from 'axios';
import { createStore } from 'vuex';
// import axios from 'axios';

export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    login(state, access_token) {
      state.access_token = access_token;
    },
  },
  actions: {
    async login(ctx, credentials) {
      axios
        .post('http://192.168.1.65:8888/kek/', {
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
  },
  modules: {},
});
