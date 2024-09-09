<template>
  <div class="search">
    <h2 class="search__title">Find a Recipe</h2>
    <form class="search__form" @submit.prevent="performSearch">
      <input
        v-model="searchQuery"
        type="text"
        class="search__input"
        placeholder="Try 'apple'"
      />
      <app-button class="search__button">Search</app-button>
    </form>
  </div>
</template>

<script>
import AppButton from "./UI/AppButton.vue";
export default {
  name: "SearchForm",
  components: { AppButton },
  data() {
    return {
      searchQuery: this.$route.query.q || "",
    };
  },
  methods: {
    performSearch() {
      this.$router.push({ path: "/search", query: { q: this.searchQuery } });
    },
  },
};
</script>

<style>
.search {
  text-align: center;
  margin-bottom: 20px;
}

.search__form {
  display: flex;
  justify-content: center;
}

.search__input {
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}
.search__button {
  border-radius: 0 5px 5px 0;
  font-size: 1.2rem;
}
</style>
