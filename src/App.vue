<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys2"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="21">{{ nickname }} </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="150" style="background: #fff">
        <a-menu
          mode="inline"
          :selectedKeys="selectedKeys1"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="home">
            人物信息
            <router-link :to="{ path: 'home' }" />
          </a-menu-item>
          <a-menu-item key="offline">
            离线战斗
            <router-link to="/offline" />
          </a-menu-item>

        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>

  <div>
    <a-modal
      title="登录"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="logingame"
      @cancel="handleCancel"
    >
      <a-input-group size="default">
        <a-row :gutter="10">
          <a-col :span="8">
            <p>账号：</p>
          </a-col>
          <a-col :span="18">
            <a-input v-model:value="userForm.username" />
          </a-col>
        </a-row>
        <a-row :gutter="10">
          <a-col :span="8">
            <p>密码：</p>
          </a-col>
          <a-col :span="18">
            <a-input v-model:value="userForm.password" />
          </a-col>
        </a-row>
      </a-input-group>
      <p>{{ ModalText }}</p>
    </a-modal>
  </div>
</template>


<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>


<script>
import { defineComponent, ref, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { orignApis } from "@/api";
import router from "@/router/index.js";
export default defineComponent({
  name: "App",

  mounted() {
    document.title="永无止境-离线版"
    this.visible = true;
    router.push("404");
  },
  setup() {
    const { user1 } = useStore().state;
    const userForm = reactive({
      username: "",
      password: "",
    });
    const selectedKeys1 = ref(["home"]);
    const selectedKeys2 = ref(["21"]);
    var nickname = ref("玩家1");

    //弹窗登录部分

    const visible = ref(true);
    const ModalText = ref("请先登录");
    const confirmLoading = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    console.log(user1.charaId);
    if (user1.charaId) {
      visible.value = false;
    } else {
      showModal();
    }
    //监听角色名称
    user1.nickname = "";
    watch(
      () => user1.nickname,
      (newvalue) => {

        newvalue=user1.nickname
        nickname.value = newvalue;

      }
    );

    const handleCancel = () => {
      visible.value = false;
    };

    const logingame = async () => {
      try {
        const res = await orignApis.login(userForm);
        user1.login = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      ModalText.value = "登陆中。。。";
      if (user1.login.status == 200) {
        user1.charaId = user1.login.data.charaId;
        confirmLoading.value = true;
        router.push("404");
        setTimeout(() => {
          visible.value = false;
          confirmLoading.value = false;
          router.push("home");
        }, 1000);
      } else {
        confirmLoading.value = false;
        visible.value = true;
        ModalText.value = user1.login.msg;
      }
    };

    // 监测路由，选中对应导航菜单项
    const route = useRoute();
    watch(
      () => route.path,
      (newValue) => {
        console.log(newValue.substring(1));
        selectedKeys1.value = [newValue.substring(1)];
      }
    );

    return {
      selectedKeys1,
      selectedKeys2,
      visible,
      ModalText,
      confirmLoading,
      userForm,
      logingame,
      showModal,
      handleCancel,
      nickname,
    };
  },
});
</script>


