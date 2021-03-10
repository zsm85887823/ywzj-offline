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
      <h2>物品</h2>
      <a-button @click="arrangeCharaMaterial">整理</a-button>
      <a-radio-group
        v-model:value="goodsinfo.filterchoose"
        @change="filterchoose"
        >选择类别：
        <a-radio-button value="0">全部</a-radio-button>
        <a-radio-button value="3">道具</a-radio-button>
        <a-radio-button value="4">合成</a-radio-button>
        <a-radio-button value="5">突破</a-radio-button>
        <a-radio-button value="7">强化</a-radio-button>
        <a-radio-button value="8">活动</a-radio-button>
        <a-radio-button value="9">真灵</a-radio-button>
      </a-radio-group>
      <a-row style=" margin: 20px;">
        <a-col
          v-for="item in goodsinfo.CharaMaterialfilter"
          v-bind:key="item"
          :span="6"
          :style="{ color: distinguishColor(item.color) }"
        >
          <a-popover trigger="hover" placement="bottomRight">
            <template #content>
              <p style="white-space: nowrap">
                <span
                  >{{ item.itemName }}
                  <a-Button
                    size="small"
                    v-if="item.itemType == 3"
                    @click="usePropypackage(item.packItemId, 1)"
                  >
                    使用
                  </a-Button>
                  <a-Button
                    size="small"
                    @click="usePropypackage(item.packItemId, 1)"
                    v-if="item.itemNum != 1 && item.itemType == 3"
                  >
                    批量使用
                  </a-Button>
                </span>
              </p>
              <div>
                <p v-if="item.typeDec">物品类型: {{ item.typeDec }}</p>
                <p v-if="item.conMana">物品等级: {{ item.level }}</p>
                <p v-if="item.itemNum">物品数量： {{ item.itemNum }}</p>
                <p v-if="item.decs">描述: {{ item.decs }}</p>
              </div>
            </template>
            {{
              item.itemNum != 1
                ? item.itemName + "*" + item.itemNum
                : item.itemName
            }}
          </a-popover>
        </a-col>
      </a-row>
    </a-col>
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
    </a-col>
  </a-row>
</template>
<style>
p {
  margin: 1px;
}
</style>


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
      CharaMaterialfilter: [],
      filterchoose: "3",
    });
    const filterchoose = () => {
      if (goodsinfo.filterchoose != 0) {
        goodsinfo.CharaMaterialfilter = goodsinfo.getCharaMaterial.filter(
          (item) => item.itemType == goodsinfo.filterchoose
        );
      } else if (goodsinfo.filterchoose == 0) {
        goodsinfo.CharaMaterialfilter = goodsinfo.getCharaMaterial;
      }
    };

    const distinguishColor = (color) => {
      if (color == 1) {
        return "#000";
      } else if (color == 2) {
        return "#c5c52f";
      } else if (color == 3) {
        return "#049c04";
      } else if (color == 4) {
        return "#005aff";
      } else if (color == 5) {
        return "#ff00e0";
      } else if (color == 6) {
        return "#ff0000";
      } else if (color == 7) {
        return "orange";
      } else {
        return "#ff00c3e0";
      }
    };
    const getCharaMaterial = async () => {
      try {
        const res = await originApis.getCharaMaterial(
          "charaId=" + user.charaId
        );
        goodsinfo.getCharaMaterial = res.data;
        filterchoose();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const usePropypackage = async (packItemId, useNum) => {
      try {
        const res = await originApis.usePropypackage(
          "charaId=" +
            user.charaId +
            "&packItemId=" +
            packItemId +
            "&useNum=" +
            useNum
        );
        res.status == 200 ? message.info(res.data) : message.info(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    const arrangeCharaMaterial = async () => {
      try {
        const res = await originApis.arrangeCharaMaterial(
          "charaId=" + user.charaId
        );
        res.status == 200 ? message.info(res.data) : message.info(res.msg);
        getCharaMaterial();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (user.charaId) {
      getCharaMaterial();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }
    return {
      goodsinfo,
      filterchoose,
      usePropypackage,
      distinguishColor,
      arrangeCharaMaterial,
      getCharaMaterial,
    };
  },
});
</script>

<style>
</style>