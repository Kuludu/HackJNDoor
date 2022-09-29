import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from 'vue-router'
import QRCode from '@/components/QRCode'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: QRCode
        },
        {
            path: '/user/:id',
            component: QRCode
        },
    ]
})

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
})
