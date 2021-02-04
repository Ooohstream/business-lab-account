import { createRouter, createWebHistory } from 'vue-router';
// import Login from '../views/Login.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
