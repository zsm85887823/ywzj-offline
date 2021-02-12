<template>
  <a-table :columns="columns" :data-source="dataSource" rowKey="columnId" :pagination="false">
    <template #name="{ text }">
      {{ text.nickName }}
    </template>
    <template #action>
      <a>action</a>
    </template>
  </a-table>
</template>


<script>
import { defineComponent } from "vue";
//import { message } from "ant-design-vue";
import { useStore } from "vuex";
//import { originApis } from "@/api";

const columns = [
  {
    title: "昵称",
    dataIndex: "nickName",
    width: "20%",
    slots: {
      customRender: "nickName",
    },
  },
  {
    title: "password",
    dataIndex: "password",
    width: "20%",
  },
];
export default defineComponent({
  name: "AccountList",
  setup() {
    const store = useStore();

    const dataSource = store.state.account.accountList;
    return {
      columns,
      dataSource,
    };
  },
});
</script>