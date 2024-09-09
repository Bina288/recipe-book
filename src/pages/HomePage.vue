<template>
  <!-- Home page contains a search field -->
  <article class="search">
    <search-form></search-form>
  </article>
  <!-- and recommends 3 ramdom popular recipes -->
  <article class="popular-recipes">
    <h2 class="popular-recipes__title">Popular Recipes</h2>
    <div class="popular-recipes__list">
      <recipe-list
        :additionalURLAPI="popularRecipesAPIPath"
        :queryAPI="popularRecipesParams"
      ></recipe-list>
    </div>
  </article>
</template>

<script>
import RecipeList from "@/components/RecipeList.vue";
import SearchForm from "@/components/SearchForm.vue";
export default {
  components: { RecipeList, SearchForm },

  data() {
    return {
      popularRecipesAPIPath: "/random",
      popularRecipesParams: { number: 3 },
    };
  },
};
</script>

