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
    </a-row>
  </a-input-group>
</template>

<script>
import { defineComponent , reactive} from "vue";
import { battleTaskApis } from "@/api";
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
    const battleForm = reactive({
      chara_id: "aa",
      map_id: 11,
    });
    const startBattle = async () => {
      try {
        const res = await battleTaskApis.startTask(battleForm);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    return {
      battleForm,
      startBattle,
    };
  },
  name: "Offline",
});
</script>