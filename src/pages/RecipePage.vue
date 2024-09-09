<template>
  <!-- Main recipe details section -->
  <article class="recipe">
    <recipe-detail :recipe="recipe"></recipe-detail>
  </article>

  <!-- Similar recipes section -->
  <article class="similar-recipes">
    <h2 class="similar-recipes__title">Similar Recipes</h2>
    <div class="similar-recipes__list">
      <recipe-list
        :additionalURLAPI="similarRecipesURL"
        :queryAPI="similarRecipesParams"
      ></recipe-list>
    </div>
  </article>

  <!-- Search form section -->
  <article class="search">
    <search-form></search-form>
  </article>
</template>

<script>
import { fetchRecipes } from "@/api/spoonacular";
import RecipeList from "@/components/RecipeList.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import SearchForm from "@/components/SearchForm.vue";
import RecipeDetail from "@/components/RecipeDetail.vue";

export default {
  components: { RecipeList, HeaderApp, SearchForm, RecipeDetail },
  data() {
    return {
      recipe: () => {},
      // Parameters for the API request to fetch recipes - URL and number of needed recipes
      similarRecipesURL: `/${this.$route.params.id}/similar`,
      similarRecipesParams: { number: 3 },
    };
  },

  //updates the information if one of the similar recipes is chosen
  watch: {
    "$route.params.id"(newId) {
      this.updateSimilarRecipes(newId);
      this.loadRecipe(newId);
    },
  },

  methods: {
    async loadRecipe() {
      try {
        this.recipe = await fetchRecipes(
          `/${this.$route.params.id}/information`
        );
      } catch (error) {
        console.error("Error fetching recipes on Recipe Page:", error);
      }
    },
    updateSimilarRecipes(newId) {
      this.similarRecipesURL = `/${newId}/similar`;
    },
  },

  mounted() {
    this.loadRecipe();
  },
};
</script>

