<template>
  <div class="ingredient__wrapper">
    <h3 class="ingredient__title">Ingredient list</h3>
    <li
      class="ingredient__list"
      v-for="ingredient in listOfIngrediens"
      :key="ingredient.id"
    >
      {{ ingredient.original }}
    </li>
  </div>
</template>

<script>
export default {
  name: "IngredientList",
  props: {
    listOfIngrediens: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.ingredient__wrapper {
  background-color: var(--lily);
  margin: 20px;
  box-shadow: 0px 2px 20px 0px rgba(21, 24, 36, 0.16);
  border-radius: 10px;
  padding: 20px;
}

.ingredient__title {
  color: var(--dark-pink);
  text-align: left;
}

.ingredient__list {
  text-align: left;
}
</style>
