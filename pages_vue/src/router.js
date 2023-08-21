import { createRouter, createWebHashHistory } from 'vue-router'
import Top from './components/top.vue'
import MinecraftPane from './components/MinecraftPane.vue'
import MtgPane from './components/MtgPane.vue'

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top
        },
        {
            path: '/minecraft',
            name: 'minecraft',
            component: MinecraftPane
        },
        {
            path: '/mtg',
            name: 'mtg',
            component: MtgPane
        }
    ]
})