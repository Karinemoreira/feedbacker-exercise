import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'

import 'animate.css'
const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })
app.mount('#app')
