<template>
  <a-select label-in-value v-model:value="map" style="width: 420px">
    <a-select-option  v-for="item in map" v-bind:key="item">{{
      item.mapName + item.minLv + "-" + item.maxLv
    }}</a-select-option>
  </a-select>

  <a-input-group size="default，">
    <a-row :gutter="10">
      <a-col :span="3">
        <a-input v-model:value="battleForm.chara_id" />
      </a-col>
      <a-col :span="3">
        <a-input v-model:value="battleForm.map_id" />
      </a-col>
      <a-col :span="3">
        <a-button type="primary" html-type="submit" @click="queryMapList"
          >提交</a-button
        >
      </a-col>
      <a-col :span="3">
        <a-button type="primary" html-type="submit" @click="test"
          >提交</a-button
        >
      </a-col>
    </a-row>
  </a-input-group>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { orignApis } from "@/api";
import { useStore } from "vuex";
export default defineComponent({
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
  setup() {
    const store = useStore();
    var map = reactive([]);

    const battleForm = reactive({
      chara_id: "aa",
      map_id: 11,
    });
    const queryMapList = async () => {
      try {
        const res = await orignApis.queryMapList();
        map = res.data;

        console.log(map);
      } catch (error) {
        console.log(error);
      }
    };
    queryMapList();
    const test = () => {
      console.log(store.state.map.data);
      console.log(store.state.user1.getGameCharacterActivity.data.name);
    };
    return {
      map,
      queryMapList,
      battleForm,
      test,
    };
  },
  name: "Test",
});
</script>