import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Offline from "@/views/Offline";
import Test from "@/views/Test";

const history = createWebHistory();

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/offline",
        component: Offline,
    },
    {
        path: "/test",
        component: Test,
    }
]

export default createRouter({
    history: history,
    routes: routes,
})

