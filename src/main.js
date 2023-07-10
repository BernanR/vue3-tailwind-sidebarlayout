import { createApp } from 'vue'
import './style.css'
import routes from './route'
import App from './App.vue'
import './assets/css/now-ui-kit.css';

const app = createApp(App);
app.use(routes)
app.mount('#app')
