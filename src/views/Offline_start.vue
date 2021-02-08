<template>
  <a-select
    label-in-value
    v-model:value="value1"
    ref="select"
    style="width: 420px"
    @change="handleChange"
    placeholder="请选择地图"
  >
    <a-select-option
      v-for="item in map.mapinfo"
      v-bind:key="item.mapName"
      v-bind:value="item.mapId"
      >{{ item.mapName + item.minLv + "-" + item.maxLv }}</a-select-option
    >
  </a-select>
  <a-button type="primary" html-type="submit" @click="start_offline"
    >开始离线</a-button
  >
</template>

<script>
import { defineComponent, reactive } from "vue";
import { orignApis } from "@/api";
import { battleTaskApis } from "@/api";
import { useStore } from "vuex";
import router from "@/router/index.js";
export default defineComponent({
  setup() {
    const { user1 } = useStore().state;
    var map = reactive({ mapinfo: [], mapchoosed: 0 });
    const handleChange = (value) => {
      map.mapchoosed = value.value;
    };
    const battleForm = reactive({
      chara_id: "aa",
      map_id: 11,
    });
    const queryMapList = async () => {
      try {
        const res = await orignApis.queryMapList();
        map.mapinfo = res.data;
        console.log(map);
      } catch (error) {
        console.log(error);
      }
    };
    queryMapList();
    const start_offline = async () => {
      try {
        battleForm.chara_id = user1.charaId;
        battleForm.map_id = map.mapchoosed - 1 + 1;

        const res = await battleTaskApis.startTask(battleForm);
        console.log(res);
        router.push("offline");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      map,
      queryMapList,
      battleForm,
      start_offline,
      handleChange,
    };
  },
  name: "Test",
});
</script>