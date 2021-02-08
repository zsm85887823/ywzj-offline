<template>
  <a-row :gutter="10">
    <a-col :span="6">
      <h2>{{ userinfo.charnickname + "------" }} 等级：{{ userinfo.level }}</h2>
    </a-col>
    <a-col :span="6">
      <h2>装备</h2>
    </a-col>
  </a-row>
  <a-row :gutter="10">
    <a-col :span="6">
      <h1>经验：{{ userinfo.exp }} / {{ userinfo.upgradeExp }}</h1>

      <h1>金币：{{ userinfo.money }} 铜币： {{ userinfo.coin }}</h1>

      <h1>
        境界：{{ userinfo.realmName }} 境界经验：{{ userinfo.realmExp }}/{{
          userinfo.realmUpExp
        }}等级上限：{{ userinfo.levelCap }} 级
      </h1>

      <h1>
        生命值：{{ userinfo.health }} 魔法值： {{ userinfo.mana }}防御：
        {{ userinfo.defense }}
      </h1>
      <h1>
        物理攻击：{{ userinfo.physicalAttack }} 魔法攻击：
        {{ userinfo.magicAttack }}
      </h1>
      <h1>
        暴击率：{{ userinfo.criticalHitValue +"%"}} 暴击伤害：
        {{ userinfo.critDamage +"%" }}
      </h1>
      <h1>
        命中率：{{ userinfo.hitRate  +"%"}} 闪避率： {{ userinfo.evade  +"%"}}速度：
        {{ userinfo.movingSpeed }}
      </h1>
      <h1>
        体格：{{ userinfo.physique }} 灵巧： {{ userinfo.dexterous }}灵力：
        {{ userinfo.spirit }}未分配点数： {{ userinfo.reAttrPoint }}
      </h1>
    </a-col>
    <a-col :span="10">
      <p v-for="item in userinfo.getCharaEquip" v-bind:key="item">
        {{ item.equitName + "-" + item.typeDec }}
      </p>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { orignApis } from "@/api";
export default defineComponent({
  name: "Home",

  setup() {
    const { user1 } = useStore().state;
    var userinfo = reactive({
      charnickname: "",
      exp: 0,
      upgradeExp: 0,
      money: 0,
      coin: 0,
      realmName: "",
      level: 0,
      health: 0,
      mana: 0,
      physicalAttack: 0,
      magicAttack: 0,
      defense: 0,
      criticalHitValue: 0,
      critDamage: 0,
      hitRate: 0,
      evade: 0,
      movingSpeed: 0,
      physique: 0,
      spirit: 0,
      dexterous: 0,
      reAttrPoint: 0,
      realmExp: 0,
      realmUpExp: 0,
      levelCap: 0,
      getCharaEquip: [],
    });

    const getGameCharacter = async () => {
      try {
        const res = await orignApis.getGameCharacter({
          charaId: user1.charaId,
        });
        user1.getGameCharacter = res;
        //定义

        userinfo.level = user1.getGameCharacter.data.level;
        userinfo.realmName = user1.getGameCharacter.data.realmName;
        userinfo.health = user1.getGameCharacter.data.health;
        userinfo.mana = user1.getGameCharacter.data.mana;
        userinfo.physicalAttack = user1.getGameCharacter.data.physicalAttack;
        userinfo.magicAttack = user1.getGameCharacter.data.magicAttack;
        userinfo.defense = user1.getGameCharacter.data.defense;
        userinfo.criticalHitValue =
          user1.getGameCharacter.data.criticalHitValue * 100;
        userinfo.critDamage = user1.getGameCharacter.data.critDamage * 100;
        userinfo.hitRate = user1.getGameCharacter.data.hitRate * 100;
        userinfo.evade = user1.getGameCharacter.data.evade * 100;
        userinfo.movingSpeed = user1.getGameCharacter.data.movingSpeed;
        userinfo.physique = user1.getGameCharacter.data.physique;
        userinfo.spirit = user1.getGameCharacter.data.spirit;
        userinfo.dexterous = user1.getGameCharacter.data.dexterous;
        userinfo.reAttrPoint = user1.getGameCharacter.data.reAttrPoint;
        userinfo.levelCap = user1.getGameCharacter.data.levelCap;
        userinfo.realmExp = user1.getGameCharacter.data.realmExp;
        userinfo.realmUpExp = user1.getGameCharacter.data.realmUpExp;

        console.log(user1);
      } catch (error) {
        console.log(error);
      }
    };
    const getGameCharacterActivity = async () => {
      try {
        const res = await orignApis.getGameCharacterActivity({
          charaId: user1.charaId,
        });
        user1.getGameCharacterActivity = res;
        //定义
        userinfo.charnickname = user1.getGameCharacterActivity.data.name;
        user1.nickname = userinfo.charnickname;
        userinfo.exp = user1.getGameCharacterActivity.data.exp;
        userinfo.upgradeExp = user1.getGameCharacterActivity.data.upgradeExp;
        userinfo.money = user1.getGameCharacterActivity.data.money;
        userinfo.coin = user1.getGameCharacterActivity.data.coin;
        console.log(user1);
      } catch (error) {
        console.log(error);
      }
    };
    const getCharaEquip = async () => {
      try {
        const res = await orignApis.getCharaEquip("charaId=" + user1.charaId);
        user1.getCharaEquip = res;
        userinfo.getCharaEquip = user1.getCharaEquip.data;
        console.log(user1);
        //定义

        console.log(userinfo);
      } catch (error) {
        console.log(error);
      }
    };
    if (user1.charaId) {
      getGameCharacter();
      getGameCharacterActivity();
      getCharaEquip();
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

<style>
</style>