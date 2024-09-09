<template>
  <article class="found-recipes">
    <h2 class="found-recipes__title">Found Recipes</h2>
    <div class="found-recipes__list">
      <!-- Recipe List displays the recipes loaded from the API -->
      <recipe-list
        :additionalURLAPI="recipesSearchAPIPath"
        :queryAPI="recipeSearchParams"
      ></recipe-list>
    </div>
  </article>
  <!-- Intersection Observer to load more recipes when User scrolls -->
  <div v-intersection="handleIntersection" class="observer"></div>
</template>

<script>
import RecipeList from "@/components/RecipeList.vue";
import VIntersection from "@/directives/VIntersection";

export default {
  components: {
    RecipeList,
  },
  directives: {
    intersection: VIntersection,
  },
  data() {
    return {
      recipes: () => [],

      // Parameters for the API request to fetch recipes
      recipesSearchAPIPath: `/complexSearch`,
      recipeSearchParams: {
        number: 10, // Number of recipes to fetch per request
        offset: 0, // Offset for pagination
        query: this.$route.query.q || "pasta", // Search query or default 'pasta'
      },
    };
  },
  methods: {
    handleIntersection() {
      this.recipeSearchParams.offset += 10; // Increase the number of recipes to skip. Trigger a watcher in RecipeList.vue
    },
  },
};
</script>

<style scoped>
.observer {
  height: 60px;
}
</style>