<template>
  <a-row>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <br /><br />
      <h2>物品</h2>
      <a-button @click="getCharaMaterial">222</a-button>

    </a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
  <a-collapse  accordion>
    <a-collapse-panel v-for="item in goodsinfo.getCharaMaterial" v-bind:key="item" :header="item.itemName">
      <p>{{ item.decs }}</p>

    </a-collapse-panel>
  </a-collapse>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { originApis } from "@/api";
import { message } from "ant-design-vue";
import router from "@/router/index.js";
export default defineComponent({
  name: "goods",

  setup() {
    const store = useStore();
    const user = store.state.account.currentAccount;
    var goodsinfo = reactive({
      getCharaMaterial: [],
    });

    const getCharaMaterial = async () => {
      try {
        const res = await originApis.getCharaMaterial(
          "charaId=" + user.charaId
        );
        goodsinfo.getCharaMaterial = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (user.charaId) {
      console.log(2);
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }
    return {
      goodsinfo,
      getCharaMaterial,
    };
  },
});
</script>

<style>
</style>