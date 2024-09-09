import axios from 'axios'

const API_KEY = 'b33cb41fce2047e3923b90c9066e3444'
const BASE_URL = 'https://api.spoonacular.com/recipes'
/* ***Query String examples***
/random
/{id}/information
/{id}/similar
/complexSearch?number=10&query=chicken
/recipes/complexSearch?query=pasta&maxFat=25&number=2
*/
const buildQueryString = (additionalURL = '/random', params = {}) => {
	const query = Object.keys(params)
		.map(
			(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
		)
		.join('&')
	const APIQuery = `?apiKey=${API_KEY}`
	return `${BASE_URL}${additionalURL}${APIQuery}&${query}`
}

export const fetchRecipes = async (string, params) => {
	const url = buildQueryString(string, params)
	try {
		const response = await axios.get(url)
		let result = response.data.recipes; // responce of Popular Recipes
        if (!result) result = response.data.results; // responce of Complex Search query
        if (!result) result = response.data; // responce of Similar Recipes
		return result
	} catch (error) {
		console.error('Fetch error:', error)
	}
}
