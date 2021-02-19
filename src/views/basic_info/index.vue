<template>
<br/>
<br/>
  <a-row>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left"  style="font-size: 0.15rem">
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
      <h1>
        体格：{{ userinfo.getGameCharacter.physique }} 灵巧：
        {{ userinfo.getGameCharacter.dexterous }}灵力：
        {{ userinfo.getGameCharacter.spirit }}未分配点数：
        {{ userinfo.getGameCharacter.reAttrPoint }}
      </h1>
    </a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <h2>装备</h2>
      <h1 v-for="item in userinfo.getCharaEquip" v-bind:key="item">
        {{ item.equitName + "-" + item.typeDec }}
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
      getGameCharacterActivity,
      getCharaEquip,
    };
  },
});
</script>