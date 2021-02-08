import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Offline from "../views/Offline";
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

