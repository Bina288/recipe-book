export default {
	computed: {
		recipeImageResized() {
			if (!this.recipe || !this.recipe.image) return ''

			const image = this.recipe.image
			const string = image.slice(0, image.lastIndexOf('-'))
			const extension = image.slice(image.lastIndexOf('.'))
			const result = `${string}-312x231${extension}`

			return result
		},
	},
	methods: {
		onImageErrorNotFound(event) {
			event.target.src = require('@/icons/dish.png')
		},
	},
}
