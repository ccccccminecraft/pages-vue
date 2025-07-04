import { createRouter, createWebHashHistory } from 'vue-router'
import Top from './components/top.vue'
import MinecraftPane from './components/MinecraftPane.vue'
import MtgPane from './components/MtgPane.vue'
import BmsPane from './components/BmsPane.vue'
import BemaniPane from './components/BemaniPane.vue'
import DtmPane from './components/DtmPane.vue'

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    scrollBehavior() {return { top: 0 }},
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
        },
        {
            path: '/bms',
            name: 'bms',
            component: BmsPane
        },
        {
            path: '/otoge',
            name: 'otoge',
            component: BemaniPane
        },
        {
            path: '/dtm',
            name: 'dtm',
            component: DtmPane
        }

    ]
})