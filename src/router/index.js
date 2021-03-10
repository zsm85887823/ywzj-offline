import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout';

export const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/welcome",
        children: [
            { path: "/welcome", name: "欢迎", component: () => import("@/views/welcome/index"), meta: { title: '永无止境PRO+MAX' } },
            { path: "/basic-info", name: "基础信息", component: () => import("@/views/basic_info/index"), },
            { path: "/bag", name: "背包", component: () => import("@/views/bag/index"), },
            { path: "/goods", name: "物品&材料", component: () => import("@/views/goods/index"), },
            { path: "/offline", name: "离线战斗", component: () => import("@/views/offline/index"), },
            { path: "/littletools", name: "设置&工具", component: () => import("@/views/littletools/index"), }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});

export default router;
