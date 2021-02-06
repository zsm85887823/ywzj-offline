<template>
  <h1>{{ charnickname }}</h1>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  setup() {

    const { user1 } = useStore().state;
    const charnickname = ref("玩家名称");
    if (user1.getGameCharacter) {
      charnickname.value = user1.getGameCharacter.data.name
    }
    watch(
      () => user1.getGameCharacter,
      (newValue) => {
        charnickname.value = newValue.data.name
      }
    );

    return {
      charnickname,
    };
  },
});
</script>

<style>
</style>