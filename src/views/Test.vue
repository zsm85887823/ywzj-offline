<template>
  <a-input-group size="default，">
    <a-row :gutter="10">
      <a-col :span="3">
        <a-input v-model:value="battleForm.chara_id" />
      </a-col>
      <a-col :span="3">
        <a-input v-model:value="battleForm.map_id" />
      </a-col>
      <a-col :span="3">
        <a-button type="primary" html-type="submit" @click="startBattle"
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
import { defineComponent , reactive} from "vue";
import { orignApis } from "@/api";
import { useStore } from 'vuex'
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

    const battleForm = reactive({
      chara_id: "aa",
      map_id: 11,
    });
    const startBattle = async () => {
      try {
        const res = await orignApis.queryMapList();
        store.state.map = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    const test = () => {
      console.log(store.state.map.data);
    }
    return {
      battleForm,
      startBattle,
      test
    };
  },
  name: "Test",
});
</script>