import { createApp } from 'vue'

import App from './App.vue'
import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
const orm = createORM();

pinia.use(orm)
app.use(pinia)

app.mount('#app')
