<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import { battleTaskApis } from "@/api";
import router from "@/router/index.js";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const { user1 } = useStore().state;
    const status = async () => {
      try {
        const res = await battleTaskApis.status(user1.charaId);
        console.log(res);
        if (res.status == 0) {
          router.push("offline_status");
        } else {
          router.push("offline_start");
        }
      } catch (error) {
        console.log(error);
      }
    };
    status();

    return {
      status,
      user1,
    };
  },
  name: "Offline",
});
</script>