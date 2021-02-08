<template>
  <h2>{{ charnickname }}</h2>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { orignApis } from "@/api";
export default defineComponent({
  name: "Home",

  setup() {
    const { user1 } = useStore().state;
    const charnickname = ref("玩家名称");

    const getGameCharacter = async () => {
      try {
        const res = await orignApis.getGameCharacter({
          charaId: user1.charaId,
        });
        user1.getGameCharacter = res;
        charnickname.value = user1.getGameCharacter.data.name;
        console.log(user1);
      } catch (error) {
        console.log(error);
      }
    };

    if (user1.charaId) {
      getGameCharacter();
    }

    return {
      charnickname,
      getGameCharacter,
    };
  },
});
</script>

<style>
</style>