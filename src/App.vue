<template>
  <header-app />
  <main>
    <router-view />
  </main>
  <footer-app />
</template>
<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";
export default {
  components: { HeaderApp, FooterApp },
};
</script>

<style scoped>
</style>