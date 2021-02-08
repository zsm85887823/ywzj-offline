import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Offline from "../views/Offline";
import Offline_status from "../views/Offline_status";
import Offline_start from "../views/Offline_start";
import Test from "../views/Test";
import Wait from "../views/404";
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
        path: "/offline_status",
        component: Offline_status,
    },    {
        path: "/offline_start",
        component: Offline_start,
    },
    {
        path: "/test",
        component: Test,
    },
    {
        path: "/404",
        component: Wait,
    }
]

export default createRouter({
    history: history,
    routes: routes,
})

