import { createApp } from 'vue'
import Toast from 'vue-toastification'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import 'vue-toastification/dist/index.css'

createApp(App)
  .use(Toast)
  .mount('#app')
