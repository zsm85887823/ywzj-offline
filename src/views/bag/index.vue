<template>
  <a-row>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <h2>装备</h2>
      <h1 v-for="item in baginfo.getCharaEquip" v-bind:key="item">
        <a-popover trigger="hover" placement="bottomLeft">
          <template #content>
            <a-row>
              <a-col style="font-size: 0.12rem; line-height: 2px" :style="{ color: distinguishColor(item.color) }">
                <p style="font-size: 0.2rem">
                  {{ item.equitName }}
                  <span v-if="item.enhanLevel != 0">
                    +{{ item.enhanLevel }}
                  </span>
                </p>
                <p>装备类型 {{ item.typeDec }}</p>
                <p>装备等级 {{ item.level }}</p>
                <p>物品状态
                  {{ item.bind == 0 ? "解绑" : "绑定" }}
                </p>
                <p v-if="item.life">

                  生命值 {{ item.life }}
                  <span v-if="item.strengLife">
                    ({{ item.strengLife }})
                  </span>
                </p>
                <p v-if="item.mana">
                  真气值 {{ item.mana }}
                  <span v-if="item.strengMana">
                    ({{ item.strengMana }})
                  </span>
                </p>
                <p v-if="item.attack">
                  攻击力 {{ item.attack }}
                  <span v-if="item.strengAttack">
                    ({{ item.strengAttack }})
                  </span>
                </p>
                <p v-if="item.magAttack">
                  法术攻击力 {{ item.magAttack }}
                  <span v-if="item.strengMagAttack">
                    ({{ item.strengMagAttack }})
                  </span>
                </p>
                <p v-if="item.defense">
                  防御力 {{ item.defense }}
                  <span v-if="item.strengDefense">
                    ({{ item.strengDefense }})
                  </span>
                </p>
                <p v-if="item.hitRate">
                  命中率
                  {{ (item.hitRate * 100).toFixed(2) }}%
                </p>
                <p v-if="item.evade">
                  闪避率
                  {{ (item.evade * 100).toFixed(2) }}%
                </p>
                <p v-if="item.critical">
                  暴击率
                  {{ (item.critical * 100).toFixed(2) }}%
                </p>
                <p v-if="item.criDamage">
                  暴击伤害
                  {{ (item.criDamage * 100).toFixed(2) }}%
                </p>
                <p v-if="item.speed">行动速度
                  {{ item.speed }}</p>
                <p v-if="item.physique">
                  体格 {{ item.physique }}
                  <span v-if="item.strengPhysique">
                    ({{ item.strengPhysique }})
                  </span>
                </p>
                <p v-if="item.dexterous">
                  灵巧 {{ item.dexterous }}
                  <span v-if="item.strengDexterous">
                    ({{ item.strengDexterous }})
                  </span>
                </p>
                <p v-if="item.spirit">
                  灵力 {{ item.spirit }}
                  <span v-if="item.strengSpirit">
                    ({{ item.strengSpirit }})
                  </span>
                </p>
                <template v-if="item.affixVoList">
                  <p v-for="cz in item.affixVoList" :key="cz.affixDescribe" :style="{
                      color:
                        cz.affixLevel == 'T1'
                          ? 'rgb(	255,215,0)'
                          : 'rgb(73, 193, 248)',
                    }">
                    {{ cz.affixName }}:
                    {{ cz.affixDescribe }}
                    {{ cz.affixLevel }}
                  </p>
                </template>
                <p v-if="item.decs">描述：
                  {{ item.decs }}</p>
                <p v-if="item.skillDesc">技能描述：
                  {{ item.skillDesc }}</p>
              </a-col>
            </a-row>
          </template>
          <p :style="{ color: distinguishColor(item.color) }">
            {{ item.equitName }}
            <span v-if="item.enhanLevel != 0">
              +{{ item.enhanLevel }}
            </span>
          </p>
        </a-popover>
      </h1>
    </a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <br /><br />
      <h2>背包</h2>
      <p>
        <a-checkbox-group>

              <a-checkbox>A</a-checkbox>


              <a-checkbox>B</a-checkbox>


              <a-checkbox>C</a-checkbox>


              <a-checkbox>D</a-checkbox>

        </a-checkbox-group>
        <a-row>

          <a-col v-for="item in baginfo.getCharaPackage" v-bind:key="item" :span="6" :style="{ color: distinguishColor(item.color) }">
            <a-popover trigger="hover" placement="bottomRight">
              <template #content>
                <a-row>
                  <a-col :span="12"></a-col>
                  <a-col :span="12">
                    <p style="margin:1px display:inline">
                      <a-button @click="useEquitBypackage(item.packItemId)" size="small">
                        装备
                      </a-button>
                      <a-button @click="appraisalEquitBypackage(item.packItemId)" size="small">
                        鉴定</a-button>
                      <a-button @click="equitStrengThen(item.packItemId)" size="small">
                        强化</a-button>
                      <a-button @click="itemBind(item.packItemId,item.bind)" size="small">
                        {{ item.bind == 0 ? "绑定" : "解绑" }}</a-button>
                      <a-button @click="oneClickSale(item.packItemId)" size="small">
                        出售</a-button>
                    </p>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col style="font-size: 0.12rem;" :span="12" :style="{ color: distinguishColor(baginfo.onbodyequip[item.kind].color) }">

                    <p style="font-size: 0.15rem;margin:1px">
                      {{ baginfo.onbodyequip[item.kind].equitName }}
                      <span v-if="baginfo.onbodyequip[item.kind].enhanLevel != 0">
                        +{{ baginfo.onbodyequip[item.kind].enhanLevel }}
                      </span>
                    </p>
                    <p style="margin:1px">装备类型 {{ baginfo.onbodyequip[item.kind].typeDec }}</p>
                    <p style="margin:1px">装备等级 {{ baginfo.onbodyequip[item.kind].level }}</p>
                    <p style="margin:1px">物品状态
                      {{ baginfo.onbodyequip[item.kind].bind == 0 ? "解绑" : "绑定" }}
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].life" style="margin:1px">

                      生命值 {{ baginfo.onbodyequip[item.kind].life }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengLife">
                        ({{ baginfo.onbodyequip[item.kind].strengLife }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].mana" style="margin:1px">
                      真气值 {{ baginfo.onbodyequip[item.kind].mana }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengMana">
                        ({{ baginfo.onbodyequip[item.kind].strengMana }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].attack" style="margin:1px">
                      攻击力 {{ baginfo.onbodyequip[item.kind].attack }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengAttack">
                        ({{ baginfo.onbodyequip[item.kind].strengAttack }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].magAttack" style="margin:1px">
                      法术攻击力 {{ baginfo.onbodyequip[item.kind].magAttack }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengMagAttack">
                        ({{ baginfo.onbodyequip[item.kind].strengMagAttack }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].defense" style="margin:1px">
                      防御力 {{ baginfo.onbodyequip[item.kind].defense }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengDefense">
                        ({{ baginfo.onbodyequip[item.kind].strengDefense }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].hitRate" style="margin:1px">
                      命中率
                      {{ (baginfo.onbodyequip[item.kind].hitRate * 100).toFixed(2) }}%
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].evade" style="margin:1px">
                      闪避率
                      {{ (baginfo.onbodyequip[item.kind].evade * 100).toFixed(2) }}%
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].critical" style="margin:1px">
                      暴击率
                      {{ (baginfo.onbodyequip[item.kind].critical * 100).toFixed(2) }}%
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].criDamage" style="margin:1px">
                      暴击伤害
                      {{ (baginfo.onbodyequip[item.kind].criDamage * 100).toFixed(2) }}%
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].speed" style="margin:1px">行动速度
                      {{ baginfo.onbodyequip[item.kind].speed }}</p>
                    <p v-if="baginfo.onbodyequip[item.kind].physique" style="margin:1px">
                      体格 {{ baginfo.onbodyequip[item.kind].physique }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengPhysique">
                        ({{ baginfo.onbodyequip[item.kind].strengPhysique }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].dexterous" style="margin:1px">
                      灵巧 {{ baginfo.onbodyequip[item.kind].dexterous }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengDexterous">
                        ({{ baginfo.onbodyequip[item.kind].strengDexterous }})
                      </span>
                    </p>
                    <p v-if="baginfo.onbodyequip[item.kind].spirit" style="margin:1px">
                      灵力 {{ baginfo.onbodyequip[item.kind].spirit }}
                      <span v-if="baginfo.onbodyequip[item.kind].strengSpirit">
                        ({{ baginfo.onbodyequip[item.kind].strengSpirit }})
                      </span>
                    </p>
                    <template v-if="baginfo.onbodyequip[item.kind].affixVoList">
                      <p v-for="cz in baginfo.onbodyequip[item.kind].affixVoList" :key="cz.affixDescribe" :style="{
                      color:
                        cz.affixLevel == 'T1'
                          ? 'rgb(	255,215,0)'
                          : 'rgb(73, 193, 248)',
                    }" style="margin:1px">
                        {{ cz.affixName }}:
                        {{ cz.affixDescribe }}
                        {{ cz.affixLevel }}
                      </p>
                    </template>
                    <p v-if="baginfo.onbodyequip[item.kind].decs" style="margin:1px">描述：
                      {{ baginfo.onbodyequip[item.kind].decs }}</p>
                    <p v-if="baginfo.onbodyequip[item.kind].skillDesc" style="margin:1px">技能描述：
                      {{ baginfo.onbodyequip[item.kind].skillDesc }}</p>

                  </a-col>
                  <a-col style="font-size: 0.12rem;  " :span="12" :style="{ color: distinguishColor(item.color) }">

                    <p style="font-size: 0.15rem;margin:1px">
                      {{ item.itemName }}
                      <span v-if=" item.enhanLevel !=0">
                        +{{ item.enhanLevel }}
                      </span>
                    </p>
                    <p style="margin:1px">装备类型 {{ item.typeDec }}</p>
                    <p style="margin:1px">装备等级 {{ item.level }}</p>
                    <p style="margin:1px">物品状态
                      {{ item.bind == 0 ? "解绑" : "绑定" }}
                    </p>
                    <p v-if="item.life" style="margin:1px">
                      生命值 {{ item.life }}
                      <span v-if="item.strengLife">
                        ({{ item.strengLife }})
                      </span>
                    </p>
                    <p v-if="item.mana" style="margin:1px">
                      真气值 {{ item.mana }}
                      <span v-if="item.strengMana">
                        ({{ item.strengMana }})
                      </span>
                    </p>
                    <p v-if="item.attack" style="margin:1px">
                      攻击力 {{ item.attack }}
                      <span v-if="item.strengAttack">
                        ({{ item.strengAttack }})
                      </span>
                    </p>
                    <p v-if="item.magAttack" style="margin:1px">
                      法术攻击力 {{ item.magAttack }}
                      <span v-if="item.strengMagAttack">
                        ({{ item.strengMagAttack }})
                      </span>
                    </p>
                    <p v-if="item.defense" style="margin:1px">
                      防御力 {{ item.defense }}
                      <span v-if="item.strengDefense">
                        ({{ item.strengDefense }})
                      </span>
                    </p>
                    <p v-if="item.hitRate" style="margin:1px">
                      命中率
                      {{ (item.hitRate * 100).toFixed(2) }}%
                    </p>
                    <p v-if="item.evade" style="margin:1px">
                      闪避率
                      {{ (item.evade * 100).toFixed(2) }}%
                    </p>
                    <p v-if="item.critical" style="margin:1px">
                      暴击率
                      {{ (item.critical * 100).toFixed(2) }}%
                    </p>
                    <p v-if="item.criDamage" style="margin:1px">
                      暴击伤害
                      {{ (item.criDamage * 100).toFixed(2) }}%
                    </p>
                    <p v-if="item.speed" style="margin:1px"> 行动速度
                      {{ item.speed }}</p>
                    <p v-if="item.physique" style="margin:1px">
                      体格 {{ item.physique }}
                      <span v-if="item.strengPhysique">
                        ({{ item.strengPhysique }})
                      </span>
                    </p>
                    <p v-if="item.dexterous" style="margin:1px">
                      灵巧 {{ item.dexterous }}
                      <span v-if="item.strengDexterous">
                        ({{ item.strengDexterous }})
                      </span>
                    </p>
                    <p v-if="item.spirit" style="margin:1px">
                      灵力 {{ item.spirit }}
                      <span v-if="item.strengSpirit">
                        ({{ item.strengSpirit }})
                      </span>
                    </p>
                    <template v-if="item.affixVoList">
                      <p v-for="cz in item.affixVoList" :key="cz.affixDescribe" :style="{
                          color:
                            cz.affixLevel == 'T1'
                              ? 'rgb(	255,215,0)'
                              : 'rgb(73, 193, 248)',
                        }" style="margin:1px">
                        {{ cz.affixName }}:
                        {{ cz.affixDescribe }}
                        {{ cz.affixLevel }}
                      </p>
                    </template>
                    <p v-if="item.decs" style="margin:1px">描述：
                      {{ item.decs }}</p>
                    <p v-if="item.skillDesc" style="margin:1px">技能描述：
                      {{ item.skillDesc }}</p>
                  </a-col>
                </a-row>
              </template>
              <LockOutlined v-if=" item.bind == 1 " style="color:#04B4AE" />
              {{ item.itemName }} <span v-if=" item.enhanLevel !=0">
                +{{ item.enhanLevel }}
              </span>
            </a-popover>
          </a-col>
        </a-row>
      </p>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { originApis } from "@/api";
import router from "@/router/index.js";
import { LockOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "basic_info",
  components: {
    LockOutlined,
  },
  setup() {
    var baginfo = reactive({
      getCharaPackage: [],
      getCharaEquip: [],
      onbodyequip: [],
    });
    const store = useStore();
    const user = store.state.account.currentAccount;
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
    const getCharaEquip = async () => {
      try {
        const res = await originApis.getCharaEquip("charaId=" + user.charaId);
        baginfo.getCharaEquip = res.data;
        for (let index = 0; index < res.data.length; index++) {
          baginfo.onbodyequip[res.data[index].geKind] = res.data[index];
        }
        console.log(baginfo.onbodyequip);
      } catch (error) {
        console.log(error);
      }
    };
    const getCharaPackage = async () => {
      try {
        const res = await originApis.getCharaPackage("charaId=" + user.charaId);
        baginfo.getCharaPackage = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const useEquitBypackage = async (packItemId) => {
      try {
        const res = await originApis.useEquitBypackage(
          "charaId=" + user.charaId + "&packItemId=" + packItemId
        );
        message.info(res.data);
        getCharaPackage();
        getCharaEquip();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const equitStrengThen = async (packItemId) => {
      try {
        const res = await originApis.equitStrengThen(
          "charaId=" + user.charaId + "&packItemId=" + packItemId
        );
        message.info(res.data);
        getCharaPackage();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const oneClickSale = async (packItemId) => {
      try {
        const res = await originApis.oneClickSale(
          "charaId=" + user.charaId + "&packItemIds=" + packItemId
        );
        message.info(res.data);
        getCharaPackage();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const itemBind = async (packItemId, bind) => {
      try {
        const res = await originApis.itemBind(
          "charaId=" +
            user.charaId +
            "&packItemId=" +
            packItemId +
            "&bind=" +
            Math.abs(bind - 1)
        );
        message.info(res.data);
        getCharaPackage();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    const appraisalEquitBypackage = async (packItemId) => {
      try {
        const res = await originApis.appraisalEquitBypackage(
          "charaId=" + user.charaId + "&packItemId=" + packItemId
        );
        message.info(res.data);
        if (res.data == "成功鉴定") {
          getCharaPackage();
        }

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (user.charaId) {
      getCharaPackage();
      getCharaEquip();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }
    return {
      getCharaPackage,
      oneClickSale,
      itemBind,
      equitStrengThen,
      useEquitBypackage,
      getCharaEquip,
      appraisalEquitBypackage,
      distinguishColor,
      baginfo,
    };
  },
});
</script>

<style>
</style>