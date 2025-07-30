import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from './router' // اینو اضافه کن

createApp(App)
  .use(router) // اینم اضافه کن
  .mount('#app')