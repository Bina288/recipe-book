<template>
  <head-app />
  <header class="header">
    <div class="container">
      <h1 class="header__title">Recipe Book</h1>
    </div>
    <nav-bar-app />
  </header>
</template>

<script>
import HeadApp from "@/components/HeadApp.vue";
import NavBarApp from "./NavBarApp.vue";
export default {
  name: "HeaderApp",
  components: { HeadApp, NavBarApp },
};
</script>

<style scoped>
.header {
  background-color: var(--background-header);
  color: var(--dark-font-color);
  padding: 5px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}

.header__title {
  color: var(--dark-font-color);
}
</style>