import { createRouter, createWebHistory } from 'vue-router';

import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import UserProfile from '../views/UserProfile.vue';
import HomePage from '../views/HomePage.vue';

import store from '../store/index.js';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/user:id',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({ name: 'HomePage' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
