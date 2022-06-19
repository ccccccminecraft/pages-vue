import { createRouter, createWebHistory } from 'vue-router'
import Top from './components/top.vue'
import MinecraftPane from './components/MinecraftPane.vue'
//
// 他のコンポーネントは省略
//

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
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
        }
    ]
})