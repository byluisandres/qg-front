import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga.css';
import '@oruga-ui/oruga-next/dist/oruga-full.css'
import router from './router';
import { createPinia } from 'pinia'


createApp(App).use(router).use(createPinia()).use(Oruga).mount('#app')
