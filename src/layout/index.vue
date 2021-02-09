<template>
    <a-layout>
        <a-layout-sider width="200">
            <div style="height: 64px" />
            <a-menu
                theme="dark"
                mode="inline"
                v-model:selectedKeys="chooseRoute"
                :style="{ borderRight: 0 }"
            >
                <a-menu-item v-for="route in permission_routes" :key="route.path">
                    <router-link :to="route.path">
                        {{ route.name }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <div style="float: right">
                    <span style="color: #fff; margin-right: 10px"
                        >当前账户:
                        {{ currentAccount ? currentAccount.nickName : "尚无账户" }}</span
                    >
                    <a-button type="primary"> 账户管理 </a-button>
                </div>
            </a-layout-header>
            <a-layout-content style="min-height: 85vh">
                <router-view />
            </a-layout-content>
            <a-layout-footer>
                <span>Andy是🐷</span>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "Layout",
    setup() {
        const { accountList, currentAccount, permission_routes } = useStore().getters;
        const chooseRoute = ref([permission_routes[0].path]);

        console.log(permission_routes)
        
        return {
            accountList,
            currentAccount,
            permission_routes,
            chooseRoute,
        };
    },
});
</script>
