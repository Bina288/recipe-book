<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="recipes.length < 1">Sorry, the recipes are not found</div>
  <preview-list v-else :recipes="recipes"></preview-list>
</template>

<script>
import { fetchRecipes } from "@/api/spoonacular";
import PreviewList from "@/components/PreviewList.vue";
export default {
  name: "RecipeList",
  components: { PreviewList },
  props: {
    additionalURLAPI: {
      type: String,
      required: true,
    },
    queryAPI: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  data() {
    return {
      recipes: () => [],
      recipesToSkip: 0,
      isLoading: true,
    };
  },

  watch: {
    // Reloads recipe if URL changes
    additionalURLAPI() {
      this.loadRecipes();
    },
    // loads new recipes if query parameters change (queryAPI.offset+=10)
    queryAPI: {
      handler() {
        this.loadNextRecipes();
      },
      deep: true,
    },
  },

  methods: {
    async loadRecipes() {
      try {
        this.isLoading = true;
        const responce = await fetchRecipes(
          this.additionalURLAPI,
          this.queryAPI
        );
        this.recipes = responce;
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async loadNextRecipes() {
      try {
        const responce = await fetchRecipes(
          this.additionalURLAPI,
          this.queryAPI
        );
        this.recipes = [...this.recipes, ...responce];
      } catch (error) {
        console.error("Error fetching new recipes:", error);
      }
    },
  },

  mounted() {
    this.loadRecipes();
  },
};
</script>
