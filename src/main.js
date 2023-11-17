import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create a new Vue app instance
const app = createApp(App);

// Mount the app instance and router
app.use(router).mount('#app');

