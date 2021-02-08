<template>
  <h2>离线状态查看</h2>
  <h1>开始时间：{{ offline.start_time }}</h1>
  <h1>总经验：{{ offline.exp_total }}</h1>
  <h1>
    战斗场次/胜利场次：{{ offline.battle_total }}/{{ offline.victory_total }}
  </h1>
  <h1>获得物品总数：{{ offline.goods_total }}</h1>
  <h1>真实经验总数：{{ offline.start_exp }}</h1>
  <br />
  <a-button type="primary" html-type="submit" @click="stop_offline"
    >停止</a-button
  >
</template>

<script>
import { defineComponent, reactive } from "vue";
import { battleTaskApis } from "@/api";
import router from "@/router/index.js";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
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
    const { user1 } = useStore().state;
    const offline = reactive({
      start_time: "",
      exp_total: 0,
      battle_total: 0,
      victory_total: 0,
      goods_total: 0,
      start_exp: 0,
    });
    const status = async () => {
      try {
        const res = await battleTaskApis.status(user1.charaId);
        offline.start_time = formatMsgTime(res.data.start_time);

        offline.exp_total = res.data.exp_total;
        offline.battle_total = res.data.battle_total;
        offline.victory_total = res.data.victory_total;
        offline.goods_total = res.data.goods_total;
        offline.start_exp = res.data.start_exp;
      } catch (error) {
        console.log(error);
      }
    };
    status();
    const stop_offline = async () => {
      try {
        const res = await battleTaskApis.stop(user1.charaId);
        console.log(res);
        router.push("offline");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      status,
      user1,
      offline,
      stop_offline,
    };
  },
  name: "Offline",
});
</script>