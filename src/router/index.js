import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout';

export const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/basic-info",
        children: [
            {
                path: "/basic-info",
                name: "基础信息",
                component: () => import("@/views/basic_info/index"),
            },
            {
                path: "/offline",
                name: "离线战斗",
                component: () => import("@/views/offline/index"),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});

export default router;
