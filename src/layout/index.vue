<template>
  <a-layout>
    <a-layout-sider breakpoint="lg" collapsed-width="0" width="100">
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
        <a-row>
          <a-col
            :xs="{ span: 8, offset: 0 }"
            :sm="{ span: 8, offset: 0 }"
            :md="{ span: 8, offset: 0 }"
            :lg="{ span: 12, offset: 6 }"
            :xl="{ span: 12, offset: 6 }"
          >
            <h1 style="color: #fff; font-size: 0.2rem">永无止境PLUS</h1>
          </a-col>

          <a-col
            :xs="{ span: 10, offset: 0 }"
            :sm="{ span: 10, offset: 0 }"
            :md="{ span: 10, offset: 0 }"
            :lg="{ span: 3, offset: 0 }"
            :xl="{ span: 3, offset: 0 }"
          >
            <span style="color: #fff; font-size: 0.2rem"
              >当前账户: {{ nickName }}</span
            >
          </a-col>
          <a-col
            :xs="{ span: 4, offset: 0 }"
            :sm="{ span: 4, offset: 0 }"
            :md="{ span: 4, offset: 0 }"
            :lg="{ span: 3, offset: 0 }"
            :xl="{ span: 3, offset: 0 }"
          >
            <a-button type="primary" @click="showSetting"> 账户管理 </a-button>
          </a-col>
        </a-row>
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
    AccountSetting,
  },
  mounted() {
    var html = document.getElementsByTagName("html")[0];
    var oWidth =
      document.body.clientWidth || document.documentElement.clientWidth;

    html.style.fontSize =
      ((Math.abs(oWidth - 1980) / 1.7 + oWidth) / 1980) * 100 + "px";
  },
  setup() {
    const store = useStore();
    const { currentAccount, permission_routes } = store.getters;
    const nickName = ref(currentAccount ? currentAccount.nickName : "无");
    const chooseRoute = ref([permission_routes[0].path]);

    const visiable = ref(false);

    const showSetting = () => {
      visiable.value = true;
    };

    const closeSetting = () => {
      visiable.value = false;
    };

    watch(
      () => store.state.account.currentAccount,
      (newAccount) => (nickName.value = newAccount.nickname)
    );

    return {
      nickName,
      permission_routes,
      chooseRoute,
      visiable,
      showSetting,
      closeSetting,
    };
  },
});
</script>
