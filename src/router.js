import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/index.vue';
import Project from './components/Project.vue';
import Vision from './components/Vision.vue';
import Career from './components/Career.vue';
// import Login from './components/Login.vue';
// import Register from './components/Register.vue';
import Introduction from './components/Introduction.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/project', component: Project },
  { path: '/vision', component: Vision },
  { path: '/career', component: Career },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },
  {
    path: '/introduction',
    component: Introduction,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

