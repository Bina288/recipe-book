<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">2024 Recipe Book.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
}

.footer__text {
  margin: 0;
  font-size: 1.6rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>