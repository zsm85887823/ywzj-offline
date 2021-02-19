<template>
  basic_info
  <a-row>
    <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
      <h2>
        {{ userinfo.getGameCharacter.name + "------" }} 等级：{{
          userinfo.getGameCharacterActivity.level
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
    <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">col-12</a-col>
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
        console.log(res);
        userinfo.getGameCharacter = res.data;

        console.log(userinfo);
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
        console.log(userinfo);
      } catch (error) {
        console.log(error);
      }
    };
    if (user.charaId) {
      getGameCharacter();
      getGameCharacterActivity();
      //getCharaEquip();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }

    return {
      userinfo,
      getGameCharacter,
      getGameCharacterActivity,
    };
  },
});
</script>