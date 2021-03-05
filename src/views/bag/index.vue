<template>
  <a-row>
    <a-col
      :xs="22"
      :sm="22"
      :md="22"
      :lg="8"
      :xl="8"
      :offset="1"
      align="left"
      style="font-size: 0.15rem"
    >
      <br /><br />
      <h2>背包</h2>
      <a-button @click="getCharaPackage"> 222</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
//import { message } from "ant-design-vue";
import { originApis } from "@/api";
//import router from "@/router/index.js";

export default defineComponent({
  name: "basic_info",

  setup() {
    const store = useStore();
    const user = store.state.account.currentAccount;
    const getCharaPackage = async () => {
      try {
        const res = await originApis.getCharaPackage("charaId=" + user.charaId);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    return {
      getCharaPackage,
    };
  },
});
</script>

<style>
</style>