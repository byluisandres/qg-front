import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import '@mdi/font/css/materialdesignicons.min.css'
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga.css';
import '@oruga-ui/oruga-next/dist/oruga-full.css'
import router from './router';
import { createPinia } from 'pinia'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import '@sweetalert2/theme-dark';

const app = createApp(App);
app.use(Oruga)
app.use(router)
app.use(createPinia())
app.config.globalProperties.$swal = Swal
app.mount('#app')
