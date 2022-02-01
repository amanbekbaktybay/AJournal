<template>
  <div class="post-page">
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        label="Поиск"
    />
    <div class="app__btns">
      <my-button @click="showDialog">Создать Пост</my-button>

      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="isVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <h1>Список Постов</h1>
    <post-list
        :posts = "filteredPost"
        @remove="removePost"
        v-if="!isPostsLoading"
        v-model="page"
    />
    <div v-else>Загрузка постов...</div>

    <div
        v-intersection="loadMorePosts" class="observer"></div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {PostList,PostForm},
  data() {
    return {
      posts: [],
      title: "",
      body: "",
      isVisible: false,
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
  methods: {
    createPost(post){
      this.posts.push(post);
      this.isVisible = false;
    },
    removePost(post){
      const index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    showDialog(){
      this.isVisible = true;
    },
    async fetchPosts(){
      this.isPostsLoading = true;
      setTimeout(async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
            .finally(() => this.isPostsLoading = false);

        this.totalPages = Math.ceil(response.headers["x-total-count"]/this.limit);

        this.posts = response.data;
      },500);

    },
    async loadMorePosts(){
      this.page++;
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
        params: {
          _limit: this.limit,
          _page: this.page
        }
      })

      this.posts = [...this.posts,...response.data];

    }

  },
  mounted() {
    this.fetchPosts();


  },
  computed: {
    sortedPostByOption(){
      return this.posts.sort((post1,post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    filteredPost(){
      return this.sortedPostByOption.filter(post => post.title.toUpperCase().includes(this.searchQuery.toUpperCase()));
    }
  }
  ,
  watch: {
    // page(){
    //   this.fetchPosts();
    // }
  }
}
</script>

<style scoped>
.app__btns{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin:15px 0;
}
.observer{
  height: 10px;
}
</style>