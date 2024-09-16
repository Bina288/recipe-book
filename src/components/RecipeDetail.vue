<template>
  <article v-if="recipe.extendedIngredients" id="recipe" class="detail-recipe">
    <!-- Recipe Photo -->
    <img
      id="recipe img"
      :src="recipeImageResized"
      width="312"
      height="231"
      alt="Recipe Image"
      class="detail-recipe__image"
      @error="onImageErrorNotFound"
    />
    <!-- Title, summary -->
    <h2 class="detail-recipe__title">{{ recipe.title }}</h2>
    <div class="detail-recipe__description" v-html="recipe.summary"></div>
    <!-- Ingrediens and instructions -->
    <ingredient-list
      v-if="recipe.extendedIngredients"
      :listOfIngrediens="recipe.extendedIngredients"
    ></ingredient-list>
    <instruction-list
      v-if="recipe.analyzedInstructions[0]"
      :listOfInstructions="recipe.analyzedInstructions[0].steps"
    ></instruction-list>
    Enjoy your meal!
  </article>
  <div v-else>Loading a recipe...</div>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";
import InstructionList from "@/components/InstructionList.vue";
import RecipeImageMixin from "@/mixins/RecipeImageMixin";
export default {
  name: "RecipeDetail",
  components: { IngredientList, InstructionList },
  mixins: [RecipeImageMixin],
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.detail-recipe {
  margin: 15px;
  padding: 10px;
  background-color: var(--white);
  color: #666;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.detail-recipe__image {
  width: 50%;
  height: auto;
  padding: 10px;
  border-radius: 20px;
}

.detail-recipe__title {
  color: var(--dark-pink);
}

.detail-recipe__description {
  font-size: 1.2rem;
  text-decoration: none;
}

.detail-recipe__description :deep(a) {
  color: #666;
  text-decoration: underline;
}

@media screen and (max-width: 450px) {
  .detail-recipe {
    background-color: white;
    border: none;
    padding: 0px;
  }
}
</style>
