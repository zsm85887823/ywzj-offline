<template>
  <a-row>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <br /><br />
      <h2>物品</h2>
      <a-button @click="arrangeCharaMaterial">整理</a-button>
      <a-radio-group v-model:value="goodsinfo.filterchoose" @change="filterchoose">选择类别：
        <a-radio-button value="0">全部</a-radio-button>
        <a-radio-button value="3">道具</a-radio-button>
        <a-radio-button value="4">合成</a-radio-button>
        <a-radio-button value="5">突破</a-radio-button>
        <a-radio-button value="7">强化</a-radio-button>
        <a-radio-button value="8">活动</a-radio-button>
        <a-radio-button value="9">真灵</a-radio-button>
      </a-radio-group>
      <a-row style=" margin: 20px;">
        <a-col v-for="item in goodsinfo.CharaMaterialfilter" v-bind:key="item" :span="6" :style="{ color: distinguishColor(item.color) }">
          <a-popover trigger="hover" placement="bottomRight">
            <template #content>
              <p style="white-space: nowrap">
                <span>{{ item.itemName }}
                  <a-Button size="small" v-if="item.itemType == 3" @click="usePropypackage(item.packItemId, 1)">
                    使用
                  </a-Button>
                  <a-popover title="Title" trigger="click">
                    <template #content>
                      <div>
                        <a-input-number id="inputNumber" v-model:value="goodsinfo.usenum" :min="1" :max="1000" />
                        <a-Button size="small" @click="usePropypackage(item.packItemId, goodsinfo.usenum)" v-if="item.itemNum != 1 && item.itemType == 3">
                          批量使用
                        </a-Button>
                      </div>
                    </template>
                    <a-Button size="small" v-if="item.itemNum != 1 && item.itemType == 3">
                      批量使用
                    </a-Button>
                  </a-popover>

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
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <a-radio-group v-model:value="goodsinfo.storechoose" @change="storechoose">

        <a-radio-button value="1">合成列表</a-radio-button>
        <a-radio-button value="2">商城</a-radio-button>
      </a-radio-group>
      <a-row>
        <a-col v-for="item in goodsinfo.getSyntheticList" v-bind:key="item" :span="12" v-show="goodsinfo.storevisiable">
          <a-card :title="item.syntheticName" headStyle="color:#6495ED;font-size: 0.15rem" style="color:#3333FF;font-size: 0.1rem">
            <p style="color:black" v-if="item.syntheticDesci"> {{item.syntheticDesci}} </p>
            <p v-if="item.materOneName"> {{item.materOneName}}:
              {{goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materOneName)!=-1? goodsinfo.getCharaMaterial[goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materOneName)].itemNum:0}}/{{item.materOneNum}}
            </p>
            <p v-if="item.materTwoName"> {{item.materTwoName}} :
              {{goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materTwoName)!=-1? goodsinfo.getCharaMaterial[goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materTwoName)].itemNum:0}}/
              {{item.materTwoNum}}</p>
            <p v-if="item.materThreeName"> {{item.materThreeName}}:
              {{ goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materThreeName)!=-1?goodsinfo.getCharaMaterial[goodsinfo.getCharaMaterial.findIndex(items => items.itemName == item.materThreeName)].itemNum:0}}
              /{{item.materThreeNum}}</p>
            <p v-if="item.syntheticExp">合成所需经验：{{item.syntheticExp}}</p>
            <p v-if="item.syntheticMoney">合成所需铜钱：{{item.syntheticMoney}}</p>
            <a-button size="small" @click="breakThroughTheSynthetic(item.syntheticId,1)">
              合成
            </a-button>
            <a-popover title="Title" trigger="click">
              <template #content>
                <div>
                  <a-input-number id="inputNumber" size="small" v-model:value="goodsinfo.usenum" :min="1" :max="10000" />
                  <a-Button size="small" @click="breakThroughTheSynthetic(item.syntheticId, goodsinfo.usenum)">
                    批量合成
                  </a-Button>
                </div>
              </template>
              <a-Button size="small">
                批量合成
              </a-Button>
            </a-popover>
          </a-card>
        </a-col>
        <a-col v-for="item in goodsinfo.waresList" v-bind:key="item" :span="12" v-show="!goodsinfo.storevisiable">
          <a-card :title="item.marketName" headStyle="color:#6495ED;font-size: 0.15rem" style="color:#3333FF;font-size: 0.1rem">
            <p style="color:black" v-if="item.marketDec"> {{item.marketDec}} </p>
            <p v-if="item.marketPrice">
              商品价格: {{ item.marketPrice }}
              {{ item.priceType == 0 ? "铜钱" : "金币" }}
            </p>
            <p v-if="item.marketNum">购买次数: {{ item.marketNum }}</p>
            <p v-if="item.marketLevel">
              商品最低购买等级: {{ item.marketLevel }}
            </p>
            <p v-if="item.typeDec">装备类型: {{ item.typeDec }}</p>
            <p v-if="item.level">装备等级: {{ item.level }}</p>
            <p v-if="item.itemNum">物品数量： {{ item.itemNum }}</p>
            <p v-if="item.life">生命值: {{ item.life }}</p>
            <p v-if="item.mana">真气值: {{ item.mana }}</p>
            <p v-if="item.attack">攻击力: {{ item.attack }}</p>
            <p v-if="item.magAttack">法术攻击力: {{ item.magAttack }}</p>
            <p v-if="item.defense">防御力: {{ item.defense }}</p>
            <p v-if="item.critical">暴击率: {{ item.critical * 100 }}%</p>
            <p v-if="item.speed">行动速度: {{ item.speed }}</p>
            <p v-if="item.physique">体格: {{ item.physique }}</p>
            <p v-if="item.dexterous">灵巧:{{ item.dexterous }}</p>
            <p v-if="item.spirit">灵力: {{ item.spirit }}</p>
            <a-button size="small" @click="buyWares(item.marketId,1)">
              购买
            </a-button>
            <a-popover title="Title" trigger="click">
              <template #content>
                <div>
                  <a-input-number id="inputNumber" size="small" v-model:value="goodsinfo.usenum" :min="1" :max="10000" />
                  <a-Button size="small" @click="buyWares(item.marketId, goodsinfo.usenum)">
                    批量购买
                  </a-Button>
                </div>
              </template>
              <a-Button size="small">
                批量购买
              </a-Button>
            </a-popover>
          </a-card>
        </a-col>

      </a-row>
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
      getSyntheticList: [],
      filterchoose: "3",
      usenum: "1",
      Syntheticchoose: "1",
      storevisiable: true,
      storechoose: "1",
      waresList: [],
    });
    const buyWares = async (waresId, waresNum) => {
      try {
        const res = await originApis.buyWares(
          "charaId=" +
            user.charaId +
            "&waresId=" +
            waresId +
            "&waresNum=" +
            waresNum
        );
        res.status == 200 ? message.info(res.data) : message.info(res.msg);
        getCharaMaterial();
      } catch (error) {
        console.log(error);
      }
    };
    const waresList = async () => {
      try {
        const res = await originApis.waresList("charaId=" + user.charaId);
        goodsinfo.waresList = res.data;
      } catch (error) {
        console.log(error);
      }
    };

    const filterchoose = () => {
      if (goodsinfo.filterchoose != 0) {
        goodsinfo.CharaMaterialfilter = goodsinfo.getCharaMaterial.filter(
          (item) => item.itemType == goodsinfo.filterchoose
        );
      } else if (goodsinfo.filterchoose == 0) {
        goodsinfo.CharaMaterialfilter = goodsinfo.getCharaMaterial;
      }
    };
    const storechoose = () => {
      if (goodsinfo.storechoose == 1) {
        goodsinfo.storevisiable = true;
      } else {
        goodsinfo.storevisiable = false;
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
    const getSyntheticList = async () => {
      try {
        const res = await originApis.getSyntheticList();
        goodsinfo.getSyntheticList = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const breakThroughTheSynthetic = async (syntheticId, syntheticNum) => {
      try {
        const res = await originApis.breakThroughTheSynthetic(
          "charaId=" +
            user.charaId +
            "&syntheticId=" +
            syntheticId +
            "&syntheticNum=" +
            syntheticNum
        );
        res.status == 200 ? message.info(res.data) : message.info(res.msg);
        getCharaMaterial();

        console.log(res);
      } catch (error) {
        console.log(error);
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
        getCharaMaterial();
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
      getSyntheticList();
      waresList();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }
    return {
      goodsinfo,
      buyWares,
      waresList,
      storechoose,
      breakThroughTheSynthetic,
      getSyntheticList,
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