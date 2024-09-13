<template>
  <div class="page-container">
    <header-app />
    <main class="main-content">
      <router-view />
    </main>
    <footer-app />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: { HeaderApp, FooterApp },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>