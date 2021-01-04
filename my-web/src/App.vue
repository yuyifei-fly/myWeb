<template>
  <div id="app">
    <!-- 导航栏start -->
    <Menus />
    <!-- 导航栏end -->

    <!-- 内容start -->
    <router-view />
    <!-- 内容end -->

    <!-- 页脚start -->
    <Foot />
    <!-- 页脚end -->
  </div>
</template>
  <script>
import Menus from "@/components/menus.vue";
import Foot from "@/components/foot.vue";
export default {
  components: {
    Menus,
    Foot,
  },
};
</script>
<style>
</style>
