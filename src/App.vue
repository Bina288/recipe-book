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

<style>
/* Global resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root styling for the app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-font-color);

  /* Custom properties for theme */
  --background-header: var(--dark-beige);
  --background-back: var(--beige);
  --recipe-background: var(--white);
  --dark-font-color: var(--olive-black);

  --dark-beige: #c3a392;
  --beige: #cbb5a9;
  --white: #f8f6f2;
  --olive-black: #383735;

  --light-beige: #f3e5d8;
  --red: #bd5e62;
  --lily: #fdedf4;
  --grey: #666;
  --dark-pink: #975f77;
  --brown: #9b7063;
}

/* Headers style */
h1 {
  font-size: 3rem;
  color: var(--red);
  margin-bottom: 20px;
}

h2 {
  font-size: 1.6rem;
  color: var(--red);
  margin-bottom: 20px;
}

h3 {
  font-size: 1.4rem;
  color: var(--red);
  margin-bottom: 20px;
}
</style>