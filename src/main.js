import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import { createRouter, createWebHistory } from 'vue-router'
import QRCode from '@/components/QRCode'
import JNSim from '@/components/JNSim'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './registerServiceWorker'

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
        {
            path: '/sim/:id',
            component: JNSim
        }
    ]
})

const app = createApp(App)
app.use(BootstrapVueNext)
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
})
