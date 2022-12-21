import main from "@/Pages/main.vue";
import {createRouter, createWebHistory} from "vue-router";
import privetstvie from "@/Pages/privetstvie.vue";
import catalog from "@/Components/catalog.vue";


const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/hi',
        component: privetstvie
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;