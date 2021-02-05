import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Offline from "@/views/Offline";


const history = createWebHistory();

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/offline",
        component: Offline,
    }
]

export default createRouter({
    history: history,
    routes: routes,
})

