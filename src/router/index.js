import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import RecipePage from '@/pages/RecipePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import SearchResultsPage from '@/pages/SearchResultsPage.vue'

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '',
				name: 'home',
				component: HomePage,
			},
			{
				path: 'recipes/:id',
				name: 'recipe',
				component: RecipePage,
			},
			{
				path: 'search',
				name: 'searchResults',
				component: SearchResultsPage,
			},
			{
				path: 'about',
				name: 'about',
				component: AboutPage,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	// скролл к началу рецепта после выбора нового среди походих
	// scroll to the start of a new  
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve) => {
			if (savedPosition) {
				return resolve(savedPosition)
			}

			const img = document.querySelector('#recipe img')

			if (img) {
				img.addEventListener('load', () => {
					resolve({ el: '#recipe', top: 0, behavior: 'smooth' })
				})
			} else {
				resolve({ el: '#recipe', top: 0, behavior: 'smooth' })
			}
		})
	},
})

export default router
