import main from "@/Pages/main.vue";
import {createRouter, createWebHistory} from "vue-router";
import catalog from "@/Components/catalog.vue";
import orders from "@/Pages/orders.vue";
import cart from "@/Pages/cart.vue";
import authorization from "@/Pages/authorization.vue";
import profile from "@/Pages/profile.vue";
import registration from "@/Pages/registration.vue";


const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/orders',
        component: orders
    },
    {
        path: '/purchase',
        component: cart
    },
    {
        path: '/login',
        component: authorization
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/registration',
        component: registration
    }

]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;