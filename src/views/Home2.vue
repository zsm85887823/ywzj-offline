<template>
  <h1>{{ charnickname }}</h1>
</template>
<style>
</style>
<script>
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "Home",
    setup() {
    const charnickname = ref("玩家名称");
        return {
      charnickname,

    };
  },
})
</script>