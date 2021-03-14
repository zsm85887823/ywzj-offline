<template>
  <br />
  <br />
  <a-row>
    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
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
        铜币：{{ userinfo.getGameCharacterActivity.money }} 金币：
        {{ userinfo.getGameCharacterActivity.coin }}
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
        <a-button shape="circle" size="small" v-if="userinfo.getGameCharacter.reAttrPoint != 0" @click="addAttrPoint(1)">
          +1</a-button>
      </p>
      <p>
        灵巧： {{ userinfo.getGameCharacter.dexterous }}
        <a-button shape="circle" size="small" v-if="userinfo.getGameCharacter.reAttrPoint != 0" @click="addAttrPoint(2)">
          +1</a-button>
      </p>
      <p>
        灵力： {{ userinfo.getGameCharacter.spirit }}
        <a-button shape="circle" size="small" v-if="userinfo.getGameCharacter.reAttrPoint != 0" @click="addAttrPoint(3)">
          +1</a-button>
      </p>
      <p>
        未分配点数： {{ userinfo.getGameCharacter.reAttrPoint }}
        <a-button size="small" @click="updateAttrPoint"> 确认分配点数</a-button>
      </p>
      <h1>
        境界：{{ userinfo.getGameCharacter.realmName }} 境界经验：{{
          userinfo.getGameCharacter.realmExp
        }}/{{ userinfo.getGameCharacter.realmUpExp }}等级上限：{{
          userinfo.getGameCharacter.levelCap
        }}
        级
      </h1>
      <p v-if=" userinfo.getRealmBonus.realmAttack">
        <span>物理攻击加成</span>
        {{ ( userinfo.getRealmBonus.realmAttack * 100).toFixed(2) || 0 }} %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmMagicAttack">
        <span>灵力攻击加成</span>
        {{( userinfo.getRealmBonus.realmMagicAttack * 100).toFixed(2) || 0}}
        %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmHealth">
        <span>血量加成</span>
        {{ ( userinfo.getRealmBonus.realmHealth * 100).toFixed(2) || 0 }} %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmMana">
        <span>真气加成</span>
        {{ ( userinfo.getRealmBonus.realmMana * 100).toFixed(2) || 0 }} %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmDefense">
        <span>防御加成</span>
        {{ ( userinfo.getRealmBonus.realmDefense * 100).toFixed(2) || 0 }}
        %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmCriticalHit">
        <span>暴击加成</span>
        {{( userinfo.getRealmBonus.realmCriticalHit * 100).toFixed(2) || 0}}
        %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmCriticalDamage">
        <span>暴击伤害加成</span>
        {{( userinfo.getRealmBonus.realmCriticalDamage * 100).toFixed(2) ||0 }}
        %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmEvade">
        <span>闪避加成</span>
        {{ ( userinfo.getRealmBonus.realmEvade * 100).toFixed(2) || 0 }} %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmHitRat">
        <span>命中加成</span>
        {{ ( userinfo.getRealmBonus.realmHitRat * 100).toFixed(2) || 0 }} %
      </p>
      <p v-if=" userinfo.getRealmBonus.realmSpeed">
        <span>速度加成</span>
        {{  userinfo.getRealmBonus.realmSpeed || 0 }}
      </p>
      <h1>
        下一境界：{{ userinfo.getCaiRealm.realmName }} 需要经验：{{
          userinfo.getCaiRealm.updateExp
        }}需要等级：{{ userinfo.getCaiRealm.realmLevel }} 级, 升级后等级上限：{{userinfo.getCaiRealm.realmMaxLevel}}
      </h1>
      <h1> 需要材料：
        <span v-if="userinfo.getCaiRealm.materOneName">
          {{userinfo.getCaiRealm.materOneName+"*"+userinfo.getCaiRealm.materOneNum}}
        </span>
        <span v-if="userinfo.getCaiRealm.materTwoName">
          {{userinfo.getCaiRealm.materTwoName+"*"+userinfo.getCaiRealm.materTwoNum}}
        </span>
        <span v-if="userinfo.getCaiRealm.materThreeName">
          {{userinfo.getCaiRealm.materThreeName+"*"+userinfo.getCaiRealm.materThreeNum}}
        </span>
        <a-button @click="breakThroughTheRealm" size="small">
          提升境界
        </a-button>
      </h1>

    </a-col>

    <a-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" :offset="1" align="left" style="font-size: 0.15rem">
      <h1>技能</h1>
      <a-row>
        <a-col :span="12" style="font-size: 0.15rem; color:#6495ED">
          <h1>主动技能</h1>
          <p v-for="item in userinfo.getCharaUseSkill.zhudong" v-bind:key="item" v-bind:value="item.skillId">
            <a-popover trigger="hover" placement="bottomRight">
              <template #content>
                <p style="white-space: nowrap; height: 24px">
                  <span>{{ item.skillName }}:</span>
                  <a-Button size="small" @click="makeDownSkill(item.skillId,item.skillType)">
                    脱下
                  </a-Button>
                </p>
                <div>
                  <p v-if="item.skillDesc">技能效果: {{ item.skillDesc }}</p>
                  <p v-if="item.conMana">技能耗蓝: {{ item.conMana }}</p>
                  <p v-if="item.consumeCoin!=0 && item.consumeCoin">升级所需金币 {{ item.consumeCoin }}</p>
                  <p v-if=" item.charaLevel ">升级人物等级 {{ item.charaLevel }}</p>
                  <p v-if="item.skillNextDesc">下一等级技能效果: {{ item.skillNextDesc }}</p>
                </div>
              </template>
              {{item.skillName}}
            </a-popover>
          </p>
        </a-col>
        <a-col :span="12" style="font-size: 0.15rem; color:#6495ED">
          <h1>被动技能</h1>
          <p v-for="item in userinfo.getCharaUseSkill.beidong" v-bind:key="item" v-bind:value="item.skillId">
            <a-popover trigger="hover" placement="bottomRight">
              <template #content>
                <p style="white-space: nowrap; height: 24px">
                  <span>{{ item.skillName }}:</span>
                  <a-Button size="small" @click="makeDownSkill(item.skillId,item.skillType)">
                    脱下
                  </a-Button>
                </p>
                <div>
                  <p v-if="item.skillDesc">技能效果: {{ item.skillDesc }}</p>
                  <p v-if="item.conMana">技能耗蓝: {{ item.conMana }}</p>
                  <p v-if="item.consumeCoin!=0 && item.consumeCoin">升级所需金币 {{ item.consumeCoin }}</p>
                  <p v-if=" item.charaLevel ">升级人物等级 {{ item.charaLevel }}</p>
                  <p v-if="item.skillNextDesc">下一等级技能效果: {{ item.skillNextDesc }}</p>
                </div>
              </template>
              {{item.skillName}}
            </a-popover>
          </p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" style="font-size: 0.15rem">
          <h1>未生效技能</h1>
          <a-row>
            <a-col :span="12" style="font-size: 0.15rem; color:#6495ED">
              <h1>主动技能</h1>
              <p v-for="item in userinfo.getCharaSkill.zhudong" v-bind:key="item" v-bind:value="item.skillId">
                <a-popover trigger="hover" placement="bottomRight">
                  <template #content>
                    <p style="white-space: nowrap; ">
                      <span>{{ item.skillName }}
                        <a-Button size="small" @click="makeSkill(item.skillId,item.skillType)">
                          装备
                        </a-Button>
                        <a-Button size="small" @click="upgradeSkill(item.skillId)" v-if="item.skillNextDesc">
                          升级
                        </a-Button>
                      </span>
                    </p>
                    <div>
                      <p v-if="item.skillDesc">技能效果: {{ item.skillDesc }}</p>
                      <p v-if="item.conMana">技能耗蓝: {{ item.conMana }}</p>
                      <p v-if="item.consumeCoin!=0 && item.consumeCoin">升级所需金币 {{ item.consumeCoin }}</p>
                      <p v-if=" item.charaLevel ">升级人物等级 {{ item.charaLevel }}</p>
                      <p v-if="item.skillNextDesc">下一等级技能效果: {{ item.skillNextDesc }}</p>
                    </div>
                  </template>
                  {{item.skillName}}
                </a-popover>
              </p>
            </a-col>
            <a-col :span="12" style="font-size: 0.15rem; color:#6495ED">
              <h1>被动技能</h1>
              <p v-for="item in userinfo.getCharaSkill.beidong" v-bind:key="item" v-bind:value="item.skillId">
                <a-popover trigger="hover" placement="bottomRight">
                  <template #content>
                    <p style="white-space: nowrap; ">
                      <span>{{ item.skillName }}
                        <a-Button size="small" @click="makeSkill(item.skillId,item.skillType)">
                          装备
                        </a-Button>
                        <a-Button size="small" @click="upgradeSkill(item.skillId)" v-if="item.skillNextDesc">
                          升级
                        </a-Button>
                      </span>
                    </p>
                    <div>
                      <p v-if="item.skillDesc">技能效果: {{ item.skillDesc }}</p>
                      <p v-if="item.conMana">技能耗蓝: {{ item.conMana }}</p>
                      <p v-if="item.consumeCoin!=0 && item.consumeCoin">升级所需金币 {{ item.consumeCoin }}</p>
                      <p v-if=" item.charaLevel ">升级人物等级 {{ item.charaLevel }}</p>
                      <p v-if="item.skillNextDesc">下一等级技能效果: {{ item.skillNextDesc }}</p>
                    </div>
                  </template>
                  {{item.skillName}}
                </a-popover>
              </p>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row>

      </a-row>
    </a-col>
  </a-row>
</template>
<style >
p {
  margin: 1px;
}
</style>
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
      getGameCharacter: {},
      getGameCharacterActivity: {},
      getCharaUseSkill: {},
      getCharaSkill: {},
      getRealmBonus: {},
      getCaiRealm: {},
    });
    const getCharaUseSkill = async () => {
      try {
        let res = await originApis.getCharaUseSkill(
          "charaId=" + user.charaId + "&skillType=1"
        );
        userinfo.getCharaUseSkill.zhudong = res.data;
        res = await originApis.getCharaUseSkill(
          "charaId=" + user.charaId + "&skillType=2"
        );
        userinfo.getCharaUseSkill.beidong = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getCharaSkill = async () => {
      try {
        const res = await originApis.getCharaSkill("charaId=" + user.charaId);
        userinfo.getCharaSkill.zhudong = [];
        userinfo.getCharaSkill.beidong = [];

        res.data.forEach((item) => {
          if (item.skillType == 1) {
            userinfo.getCharaSkill.zhudong.push(item);
          }
        });
        res.data.forEach((item) => {
          if (item.skillType == 2) {
            userinfo.getCharaSkill.beidong.push(item);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    const makeSkill = async (skillId, skillType) => {
      try {
        const res = await originApis.makeSkill(
          "charaId=" +
            user.charaId +
            "&skillId=" +
            skillId +
            "&skillType=" +
            skillType
        );
        res.status == 500 ? message.info(res.msg) : message.info(res.data);
        getCharaSkill();
        getCharaUseSkill();
      } catch (error) {
        console.log(error);
      }
    };
    const upgradeSkill = async (skillId) => {
      try {
        const res = await originApis.upgradeSkill(
          "charaId=" + user.charaId + "&skillId=" + skillId
        );
        res.status == 500 ? message.info(res.msg) : message.info(res.data);
        getCharaSkill();
      } catch (error) {
        console.log(error);
      }
    };
    const makeDownSkill = async (skillId, skillType) => {
      try {
        const res = await originApis.makeDownSkill(
          "charaId=" +
            user.charaId +
            "&skillId=" +
            skillId +
            "&skillType=" +
            skillType
        );
        res.status == 500 ? message.info(res.msg) : message.info(res.data);
        getCharaUseSkill();
        getCharaSkill();
      } catch (error) {
        console.log(error);
      }
    };
    const getRealmBonus = async () => {
      try {
        const res = await originApis.getRealmBonus("charaId=" + user.charaId);
        userinfo.getRealmBonus = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getCaiRealm = async () => {
      try {
        const res = await originApis.getCaiRealm("charaId=" + user.charaId);
        userinfo.getCaiRealm = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    const breakThroughTheRealm = async () => {
      try {
        const res = await originApis.breakThroughTheRealm(
          "charaId=" + user.charaId
        );
        res.status == 500 ? message.info(res.msg) : message.info(res.data);
      } catch (error) {
        console.log(error);
      }
    };
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
          spirit: userinfo.getGameCharacter.spirit,
          physique: userinfo.getGameCharacter.physique,
          dexterous: userinfo.getGameCharacter.dexterous,
          reAttrPoint: userinfo.getGameCharacter.reAttrPoint,
          charaId: user.charaId,
        });
        message.info("分配属性点：" + res.msg);
      } catch (error) {
        console.log(error);
      }
    };

    if (user.charaId) {
      getGameCharacter();
      getCaiRealm();
      getRealmBonus();
      getGameCharacterActivity();
      getCharaUseSkill();
      getCharaSkill();
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }

    return {
      userinfo,
      breakThroughTheRealm,
      getCaiRealm,
      getRealmBonus,
      makeDownSkill,
      upgradeSkill,
      makeSkill,
      getCharaSkill,
      getCharaUseSkill,
      getGameCharacter,
      getGameCharacterActivity,
      updateAttrPoint,
      addAttrPoint,
    };
  },
});
</script>