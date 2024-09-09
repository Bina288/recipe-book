import axios from 'axios';
export const recipesModule = {
    state: ()=>({
        posts : [ ],
      //  isPostLoading: false,
        selectedSort: '',
        sortOptions: [
            {value: 'title', name: 'By title'

        }, {value: 'body', name: 'By desc' },],
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        isFetching: false,
    }),
    getters:{
        sortedPosts(state){
            return [...state.posts].sort((post1, post2)=>  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters){
            return getters.sortedPosts.filter((post)=> post.title.includes(state.searchQuery))
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostLoading = bool;
        },
        setPage(state, page){
            state.page = page;
        },
        setSort(state, sort){
            state.selectedSort = sort;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
        setFetching(state, bool){
            state.isFetching = bool;
        },
        

    },
    actions:{
        
           async loadMorePosts({state, commit}) {
            console.log('loadMore', state.page >= state.totalPages)
            if (state.isFetching || state.page >= state.totalPages) return; // Предотвратить множественные запросы и выйти, если достигнут конец страниц
            console.log('loadMore 2')
            commit('setFetching', true);
            try {
              commit('setPage',state.page+1);
              const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
                {
                  params: {
                    _page: state.page,
                    _limit: state.limit,
                  },
                }
              );
              commit('setPosts', [...state.posts, ...response.data]); // Добавляем новые посты к существующим
            } catch (e) {
              console.log('Error:', e);
            } finally {
                commit('setFetching', false);
            }
    },
},
namespaced: true, 
}