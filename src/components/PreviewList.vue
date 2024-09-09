<template>
  <div class="recipes__list">
    <div v-for="recipe in recipes" :key="recipe.id">
      <recipe-preview class="recipes" :recipe="recipe"></recipe-preview>
    </div>
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview.vue";

export default {
  name: "PreviewList",
  components: { RecipePreview },
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.recipes__list {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  gap: 10px;
  justify-content: space-around;
}
</style>