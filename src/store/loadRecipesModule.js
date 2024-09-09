import { fetchRecipes } from '@/api/spoonacular'
export const loadRecipesModule = {
	state: () => ({
		isLoading: false,
		error: null,
	}),
	getters: {
		isLoading: (state) => state.isLoading,
		error: (state) => state.error,
	},
	mutations: {
		setIsLoading(state, isLoading) {
			state.isLoading = isLoading
		},
		setError(state, error) {
			state.error = error
		},
	},
	actions: {
		async loadRecipes({ commit }, { additionalURLAPI, queryAPI }) {
			commit('setLoading', true)
			commit('setError', null)
			try {
				const recipes = await fetchRecipes(additionalURLAPI, queryAPI)
				commit('setLoading', false)
				return recipes
			} catch (error) {
				commit('setLoading', false)
				commit('setError', error)
				throw error
			}
		},
	},
	namespaced: true,
}
