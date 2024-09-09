<template>
  <article class="found-recipes">
    <h2 class="found-recipes__title">Found Recipes</h2>
    <div class="found-recipes__list">
      <div class="recipes__list" v-for="recipe in recipes" :key="recipe.id">
        <recipe-preview :recipe="recipe"></recipe-preview>
      </div>
    </div>
    <button @click="loadNextRecipes">Find next 5</button>
  </article>
</template>

<script>
import { fetchRecipes } from "@/api/spoonacular";
import RecipeList from "@/components/RecipeList.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import SearchForm from "@/components/SearchForm.vue";
import RecipeDetail from "@/components/RecipeDetail.vue";
import RecipePreview from "@/components/RecipePreview.vue";

export default {
  components: {
    RecipeList,
    HeaderApp,
    SearchForm,
    RecipeDetail,
    RecipePreview,
  },
  data() {
    return {
      recipes: () => [],
      foundRecipesURL_API: `/complexSearch`,
      numberOfFoundRecipes_API: {
        number: 5,
        query: this.$route.query.q || "pasta",
      },
      recipesToSkip: 0,
    };
  },
  methods: {
    async loadRecipes() {
      try {
        this.isLoading = true;
        const responce = await fetchRecipes(
          this.foundRecipesURL_API,
          this.numberOfFoundRecipes_API
        );
        this.recipes = responce.recipes;
        if (!this.recipes) this.recipes = responce.results;
        if (!this.recipes) this.recipes = responce;
        // console.log("recipes in RecipeList")
        console.log("recipes in SearchPage", this.recipes);
        //console.log("recipes in RecipeList", responce);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async loadNextRecipes() {
      try {
        this.isLoading = true;
        this.recipesToSkip += 5;
        this.numberOfFoundRecipes_API.offset = this.recipesToSkip;
        const responce = await fetchRecipes(
          this.foundRecipesURL_API,
          this.numberOfFoundRecipes_API
        );
        // this.recipes = responce.recipes;
        this.recipes = [...this.recipes, ...responce.results];
        // if (!this.recipes) this.recipes = responce;
        // console.log("recipes in RecipeList")
        console.log(" NEXT recipes in Search Results List", this.recipes);
        //console.log("recipes in RecipeList", responce);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    console.log("*****Search Results List*********");
    this.loadRecipes();
  },
};
</script>

<style scoped>
</style>