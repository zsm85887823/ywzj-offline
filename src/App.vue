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
        <a-menu-item key="21"> nav 1 </a-menu-item>
        <a-menu-item key="22"> nav 2 </a-menu-item>
        <a-menu-item key="23"> nav 3 </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="150" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys1"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >

            <a-menu-item key="1">Basic Info</a-menu-item>
            <a-menu-item key="2">offline</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>

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
        <offline />

        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
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
import { defineComponent } from "vue";
import offline from "@/components/offline.vue";
export default defineComponent({
  components: { offline },

  data() {
    return {
      selectedKeys1: ["1"],
      selectedKeys2: ["21"],
      openKeys: ["sub1"],
    };
  },

});
</script>


