<template>
  <!-- link to the recipe page with recipe detail -->
  <router-link
    class="recipe__link"
    :to="{ name: 'recipe', params: { id: recipe.id } }"
  >
    <!-- contains title and, optional, image and summary-->
    <article
      :class="[recipe.image ? 'recipe__wrapper' : 'recipe__recommended']"
    >
      <img
        v-if="recipe.image"
        :src="recipeImageResized"
        alt="Recipe Image"
        class="recipe__image"
        loading="lazy"
        @error="onImageErrorNotFound"
      />
      <h3
        class="recipe__title"
        :class="[recipe.image ? '' : 'recipe__only-title']"
      >
        {{ recipe.title }}
      </h3>

      <div
        v-if="recipe.summary"
        class="recipe__description"
        v-html="truncatedDescription"
      ></div>
    </article>
  </router-link>
</template>

<script>
import RecipeImageMixin from "@/mixins/RecipeImageMixin";
export default {
  // mixin for image handling
  mixins: [RecipeImageMixin],
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      // returns summary string, truncated on this length before last Space, and adds '...' in the end
      const maxLength = 100;
      let result = this.recipe.summary;
      // Truncate the summary at the nearest space before maxLength
      result = result.slice(0, result.lastIndexOf(" ", maxLength));
      result = this.formatEndSummary(result);
      return result;
    },
  },

  methods: {
    formatEndSummary(str) {
      // adds "...", if the last symbol of string is letter or number, and deletes the last symbol and adds "..."', if not
      if (/[a-zA-Z0-9]$/.test(str)) {
        return str + "...";
      } else {
        return str.slice(0, -1) + "...";
      }
    },
  },
};
</script>

<style>
.recipe__link {
  text-decoration: none;
}

.recipe__wrapper {
  margin: auto;
  padding: 10px;
  width: 15rem;
  background-color: var(--white);
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.recipe__recommended {
  padding: 0px;
}

.recipe__image {
  max-width: 231px;
  padding: 10px;
  border-radius: 15px;
}

.recipe__title {
  color: var(--dark-pink);
  margin-bottom: 10px;
}

.recipe__only-title {
  font-size: 1.2rem;
  color: var(--dark-pink);
}

.recipe__description {
  color: #666;
  font-size: 1.2rem;
  text-decoration: none;
}

@media screen and (max-width: 450px) {
  .recipe__image {
    max-width: 300px;
    border-radius: 20px;
  }

  .recipe__wrapper {
    width: auto;
    margin: 15px;
  }
}
</style>
