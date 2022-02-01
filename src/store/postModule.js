import axios from "axios";


export const postModule = {
    state:() => {
        return {
            posts: [],
            title: "",
            body: "",
            isPostsLoading: false,
            selectedSort: "",
            sortOptions: [
                {value: "title", name: "По заголовку"},
                {value: "body", name: "По содержимому"}
            ],
            searchQuery: "",
            limit: 10,
            page: 1,
            totalPages: 0,
        }
    },
    getters: {
        sortedPostByOption(state){
            return state.posts.sort((post1,post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
            });
        },
        filteredPost(state,getters){
            return getters.sortedPostByOption.filter(post => post.title.toUpperCase().includes(state.searchQuery.toUpperCase()));
        }
    },
    mutations: {
        setPosts(state,posts){
            state.posts = posts;
        },
        setTitle(state,title){
            state.title = title;
        },
        setBody(state,body){
            state.body = body;
        },
        setIsPostsLoading(state,isPostsLoading){
            state.isPostsLoading = isPostsLoading;
        },
        setSelectedSort(state,selectedSort){
            state.selectedSort = selectedSort;
        },
        setSortOptions(state,sortOptions){
            state.sortOptions = sortOptions;
        },
        setSearchQuery(state,searchQuery){
            state.searchQuery = searchQuery;
        },
        setPage(state,page){
            state.page = page;
        },
        setTotalPages(state,totalPages){
            state.totalPages = totalPages;
        },
    },
    actions: {
        async fetchPosts({state,commit}){
            commit("setIsPostsLoading", true);
            setTimeout(async ()=>{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                    params: {
                        _limit: state.limit,
                        _page: state.page
                    }
                })
                    .finally(() => commit("isPostsLoading", true));

                commit("setTotalPages",Math.ceil(response.headers["x-total-count"]/state.limit));

                commit("setPosts",response.data);
            },500);

        },
        async loadMorePosts({state,commit}){
            commit("setPage",state.page++);
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                params: {
                    _limit: state.limit,
                    _page: state.page
                }
            })

            commit("setPosts",[...state.posts,...response.data]);

        }
    },
    namespaced: true

}