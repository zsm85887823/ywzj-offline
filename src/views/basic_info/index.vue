<template>
  <br />
  <br />
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
      <h2>
        {{ userinfo.getGameCharacter.name + "------" }} 等级：{{
          userinfo.getGameCharacter.level
        }}
      </h2>
      <h1>
        经验：{{ userinfo.getGameCharacterActivity.exp }} /
        {{ userinfo.getGameCharacterActivity.upgradeExp }}
      </h1>
      <h1>
        金币：{{ userinfo.getGameCharacterActivity.money }} 铜币：
        {{ userinfo.getGameCharacterActivity.coin }}
      </h1>
      <h1>
        境界：{{ userinfo.getGameCharacter.realmName }} 境界经验：{{
          userinfo.getGameCharacter.realmExp
        }}/{{ userinfo.getGameCharacter.realmUpExp }}等级上限：{{
          userinfo.getGameCharacter.levelCap
        }}
        级
      </h1>
      <h1>
        生命值：{{ userinfo.getGameCharacter.health }} 魔法值：
        {{ userinfo.getGameCharacter.mana }}防御：
        {{ userinfo.getGameCharacter.defense }}
      </h1>
      <h1>
        物理攻击：{{ userinfo.getGameCharacter.physicalAttack }} 魔法攻击：
        {{ userinfo.getGameCharacter.magicAttack }}
      </h1>
      <h1>
        暴击率：{{ userinfo.getGameCharacter.criticalHitValue * 100 + "%" }}
        暴击伤害：
        {{ userinfo.getGameCharacter.critDamage * 100 + "%" }}
      </h1>
      <h1>
        命中率：{{ userinfo.getGameCharacter.hitRate * 100 + "%" }} 闪避率：
        {{ userinfo.getGameCharacter.evade * 100 + "%" }}速度：
        {{ userinfo.getGameCharacter.movingSpeed }}
      </h1>
      <p>
        体格：{{ userinfo.getGameCharacter.physique }}
        <a-button
          shape="circle"
          size="small"
          v-if="userinfo.getGameCharacter.reAttrPoint != 0"
          @click="addAttrPoint(1)"
        >
          +1</a-button
        >
      </p>
      <p>
        灵巧： {{ userinfo.getGameCharacter.dexterous }}
        <a-button
          shape="circle"
          size="small"
          v-if="userinfo.getGameCharacter.reAttrPoint != 0"
          @click="addAttrPoint(2)"
        >
          +1</a-button
        >
      </p>
      <p>
        灵力： {{ userinfo.getGameCharacter.spirit }}
        <a-button
          shape="circle"
          size="small"
          v-if="userinfo.getGameCharacter.reAttrPoint != 0"
          @click="addAttrPoint(3)"
        >
          +1</a-button
        >
      </p>
      <p>
        未分配点数： {{ userinfo.getGameCharacter.reAttrPoint }}
        <a-button size="small" @click="updateAttrPoint"> 确认分配点数</a-button>
      </p>
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
      <h2>装备</h2>

      <h1 v-for="item in userinfo.getCharaEquip" v-bind:key="item">
        <a-popover trigger="hover" placement="leftTop">
          <template #content>
            <a-row>
              <a-col
                style="font-size: 0.12rem; line-height: 2px"
                :style="{ color: distinguishColor(item.color) }"
              >
                <p style="font-size: 0.2rem">
                  {{ item.equitName }}
                  <span v-if="item.itemType != 3 && item.itemType != 4">
                    +{{ item.enhanLevel }}
                  </span>
                </p>
                <p>装备类型 {{ item.typeDec }}</p>
                <p>装备等级 {{ item.level }}</p>
                <p>物品状态 {{ item.bind == 0 ? "解绑" : "绑定" }}</p>
                <p v-if="item.life">
                  生命值 {{ item.life }}
                  <span v-if="item.strengLife"> ({{ item.strengLife }}) </span>
                </p>
                <p v-if="item.mana">
                  真气值 {{ item.mana }}
                  <span v-if="item.strengMana"> ({{ item.strengMana }}) </span>
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
                  命中率 {{ (item.hitRate * 100).toFixed(2) }}%
                </p>
                <p v-if="item.evade">
                  闪避率 {{ (item.evade * 100).toFixed(2) }}%
                </p>
                <p v-if="item.critical">
                  暴击率 {{ (item.critical * 100).toFixed(2) }}%
                </p>
                <p v-if="item.criDamage">
                  暴击伤害 {{ (item.criDamage * 100).toFixed(2) }}%
                </p>
                <p v-if="item.speed">行动速度 {{ item.speed }}</p>
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
                  <p
                    v-for="cz in item.affixVoList"
                    :key="cz.affixDescribe"
                    :style="{
                      color:
                        cz.affixLevel == 'T1'
                          ? 'rgb(234 255 0)'
                          : 'rgb(73, 193, 248)',
                    }"
                  >
                    {{ cz.affixName }}: {{ cz.affixDescribe }}
                    {{ cz.affixLevel }}
                  </p>
                </template>
                <p v-if="item.decs">描述： {{ item.decs }}</p>
                <p v-if="item.skillDesc">技能描述： {{ item.skillDesc }}</p>
              </a-col>
            </a-row>
          </template>
          <p :style="{ color: distinguishColor(item.color) }">
            {{ item.equitName }}
            <span v-if="item.itemType != 3 && item.itemType != 4">
              +{{ item.enhanLevel }}
            </span>
          </p>
        </a-popover>
      </h1>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { originApis } from "@/api";
import router from "@/router/index.js";

export default defineComponent({
  name: "basic_info",

  setup() {
    const store = useStore();
    const user = store.state.account.currentAccount;
    var userinfo = reactive({
      getCharaEquip: [],
      getGameCharacter: {},
      getGameCharacterActivity: {},
    });
    console.log(userinfo);

    const getGameCharacter = async () => {
      try {
        const res = await originApis.getGameCharacter({
          charaId: user.charaId,
        });
        userinfo.getGameCharacter = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getGameCharacterActivity = async () => {
      try {
        const res = await originApis.getGameCharacterActivity({
          charaId: user.charaId,
        });
        userinfo.getGameCharacterActivity = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getCharaEquip = async () => {
      try {
        const res = await originApis.getCharaEquip("charaId=" + user.charaId);
        userinfo.getCharaEquip = res.data;
      } catch (error) {
        console.log(error);
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
    const addAttrPoint = (Num) => {
      if (Num == 1) {
        userinfo.getGameCharacter.reAttrPoint =
          userinfo.getGameCharacter.reAttrPoint - 1;
        userinfo.getGameCharacter.physique =
          userinfo.getGameCharacter.physique + 1;
      } else if (Num == 2) {
        userinfo.getGameCharacter.reAttrPoint =
          userinfo.getGameCharacter.reAttrPoint - 1;
        userinfo.getGameCharacter.dexterous =
          userinfo.getGameCharacter.dexterous + 1;
      } else {
        userinfo.getGameCharacter.reAttrPoint =
          userinfo.getGameCharacter.reAttrPoint - 1;
        userinfo.getGameCharacter.spirit = userinfo.getGameCharacter.spirit + 1;
      }
    };
    const updateAttrPoint = async () => {
      try {
        const res = await originApis.updateAttrPoint({
          spirit:userinfo.getGameCharacter.spirit,
          physique:userinfo.getGameCharacter.physique,
          dexterous:userinfo.getGameCharacter.dexterous,
          reAttrPoint:userinfo.getGameCharacter.reAttrPoint,
          charaId: user.charaId,
        });
        message.info("分配属性点："+res.msg);
      } catch (error) {
        console.log(error);
      }
    };

    if (user.charaId) {
      getGameCharacter();
      getGameCharacterActivity();
      getCharaEquip();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }

    return {
      userinfo,
      getGameCharacter,
      distinguishColor,
      getGameCharacterActivity,
      getCharaEquip,
      updateAttrPoint,
      addAttrPoint,
    };
  },
});
</script>