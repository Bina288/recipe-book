<template>
  <div class="instructions__wrapper">
    <h3 class="instructions__title">Instructions:</h3>
    <li
      class="instructions__list"
      v-for="instruction in listOfInstructions"
      :key="instruction.number"
    >
      {{ instruction.step }}
    </li>
  </div>
</template>

<script>
export default {
  name: "InstructionList",
  props: {
    listOfInstructions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.instructions__wrapper {
  margin: 10px;
}

.instructions__title {
  color: var(--dark-pink);
  text-align: left;
}

.instructions__list {
  margin-bottom: 10px;
  color: var(--grey);
  text-align: left;
  list-style-type: decimal;
  line-height: 1.5;
}
</style>
