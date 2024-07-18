import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './components/App.vue'

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).mount('#app')
