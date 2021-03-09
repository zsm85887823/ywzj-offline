<template>
  <br /><br />
  <a-row>
    <a-col v-show="visiable.visiable" :offset=1 style="font-size: 0.15rem">
      <a-select label-in-value ref="select" style="width: 300px" size="small" @change="handleChange" placeholder="请选择地图">
        <a-select-option v-for="item in map.mapinfo" v-bind:key="item.mapName" v-bind:value="item.mapId">{{ item.mapName + item.minLv + "-" + item.maxLv }}</a-select-option>
      </a-select>
      <a-button type="primary" html-type="submit" @click="start_offline">开始离线</a-button>
    </a-col>
    <a-col v-show="!visiable.visiable" :offset=1 style="font-size: 0.15rem" align="left">
      <h2>离线状态查看</h2>
      <h1>开始时间：{{ offlinestatus.status.start_time }}</h1>
      <h1>总经验：{{ offlinestatus.status.exp_total }}</h1>
      <h1>
        战斗场次/胜利场次：{{ offlinestatus.status.battle_total }}/{{
          offlinestatus.status.victory_total
        }}
      </h1>
      <h1>获得物品总数：{{ offlinestatus.status.goods_total }}</h1>
      <h1>真实经验总数：{{ offlinestatus.status.start_exp }}</h1>
      <br />
      <a-button type="primary" html-type="submit" @click="stop_offline">停止</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { originApis } from "@/api";
import { battleTaskApis } from "@/api";
import { message } from "ant-design-vue";
import { useStore } from "vuex";
import router from "@/router/index.js";
export default defineComponent({
  setup() {
    const store = useStore();
    var offlinestatus = reactive({
      status: {},
    });
    var visiable = reactive({ visiable: true });
    const user = store.state.account.currentAccount;
    var map = reactive({ mapinfo: [], mapchoosed: 0 });
    const handleChange = (value) => {
      map.mapchoosed = value.value;
    };
    const battleForm = reactive({
      chara_id: "aa",
      map_id: 11,
      battle_type: 1,
    });

    const checkstatus = async () => {
      try {
        const res = await battleTaskApis.taskStatus(user.charaId);
        if (res.status == 0) {
          visiable.visiable = false;
          offlinestatus.status = res.data;
          offlinestatus.status.start_time = formatMsgTime(
            offlinestatus.status.start_time
          );
        } else {
          visiable.visiable = true;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const queryMapList = async () => {
      try {
        const res = await originApis.queryMapList();
        map.mapinfo = res.data;
      } catch (error) {
        console.log(error);
      }
    };

    const start_offline = async () => {
      try {
        battleForm.chara_id = user.charaId;
        battleForm.map_id = map.mapchoosed - 1 + 1;
        const res = await battleTaskApis.taskStart(battleForm);
        console.log(res);
        message.info("离线战斗已开始！");
        checkstatus();
      } catch (error) {
        console.log(error);
      }
    };
    const stop_offline = async () => {
      try {
        const res = await battleTaskApis.taskStop(user.charaId);

        console.log(res);
        message.info("离线战斗已停止！");
        checkstatus();
      } catch (error) {
        console.log(error);
      }
    };
    const formatMsgTime = (dateTimeStamp) => {
      var result = "";
      var minute = 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var now = new Date().getTime() / 1000;
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        return;
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else result = "刚刚";
      return result;
    };
    if (user.charaId) {
      console.log("111");
      queryMapList();
      checkstatus();
      console.log(visiable);
    } else {
      message.info("请先登录!或设为当前账号！");
      router.push("/welcome");
    }
    return {
      map,
      queryMapList,
      visiable,
      battleForm,
      start_offline,
      stop_offline,
      handleChange,
      offlinestatus,
      checkstatus,
    };
  },
  name: "offline",
});
</script>