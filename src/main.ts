import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import 'virtual:windi.css'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale : 'en',
    messages
})

const head = createHead()

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    routes,
    history: createWebHistory()
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(head)

app.mount('#app')
