<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
      <li class="nav__item"><a href="/about" class="nav__link">About</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBarApp",
};
</script>
<style scoped>
.nav {
  margin-top: 10px;
}

.nav__list {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.nav__item {
  margin: 5px 15px;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
}

.nav__link:hover {
  text-decoration: underline;
}
</style>