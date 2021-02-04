import { createRouter, createWebHistory } from 'vue-router';
// import Login from '../views/Login.vue';
import Post from '@/views/Post.vue';
import Home from '@/views/Home.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
