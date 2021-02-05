import { createRouter, createWebHistory } from 'vue-router';
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

export default router;
