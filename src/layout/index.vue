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
                        {{ nickName }}</span
                    >
                    <a-button type="primary" @click="showSetting"> 账户管理 </a-button>
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
    <AccountSetting :visiable="visiable" @cancel="closeSetting" />
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import AccountSetting from "./components/AccountSetting";
import { useStore } from "vuex";

export default defineComponent({
    name: "Layout",
    components: {
        AccountSetting
    },
    setup() {
     
        const store = useStore();
        const { currentAccount, permission_routes } = store.getters;
        const nickName = ref(currentAccount ? currentAccount.nickName : "尚无账户")
        const chooseRoute = ref([permission_routes[0].path]);

        const visiable = ref(false);

        const showSetting = () => {
            visiable.value = true;
        }

        const closeSetting = () => {
            visiable.value = false;
        }


        watch(() => store.state.account.currentAccount, (newAccount) => nickName.value = newAccount.nickname)
        
        return {
            nickName,
            permission_routes,
            chooseRoute,
            visiable,
            showSetting,
            closeSetting
        };
    },
});
</script>
