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
    path: '/user/:userId',
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
// import Login from '../views/Login.vue';
import Post from '@/views/Post.vue';
import Home from '@/views/Home.vue';
import Enterprise from '@/views/Enterprise.vue';
import CreateEnterprise from '@/views/CreateEnterprise.vue';

const routes = [
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/enterprise/:id',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/createenterprise',
    name: 'Create Enterprise',
    component: CreateEnterprise
  }
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
