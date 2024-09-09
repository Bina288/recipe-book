import { createStore } from 'vuex';
import { loadRecipesModule } from './loadRecipesModule';

export default createStore({
	modules: { loadRecipesModule },
});
