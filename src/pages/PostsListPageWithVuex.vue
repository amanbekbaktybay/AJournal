<template>
  <div class="post-page">
    <h1>Страница с постами</h1>
<!--    <my-input-->
<!--        v-model="searchQuery"-->
<!--        label="Поиск"-->
<!--    />-->
    <div class="app__btns">
      <my-button @click="showDialog">Создать Пост</my-button>

<!--      <my-select-->
<!--          v-model="selectedSort"-->
<!--          :options="sortOptions"-->
<!--      />-->
    </div>

    <my-dialog v-model:show="isVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <h1>Список Постов</h1>
<!--    <post-list-->
<!--        :posts = "filteredPost"-->
<!--        @remove="removePost"-->
<!--        v-if="!isPostsLoading"-->
<!--        v-model="page"-->
<!--    />-->
<!--    <div v-else>Загрузка постов...</div>-->

    <div
        v-intersection="loadMorePosts" class="observer">
    </div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {mapActions,mapGetters,mapMutations,mapState} from "vuex";
import axios from "axios";

export default {
  components: {PostList,PostForm},
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage"
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  mounted() {
     this.fetchPosts();


  },
  computed: {
    ...mapGetters({
      sortedPostByOption: "post/sortedPostByOption",
      filteredPost: "post/filteredPost"
    }),
    ...mapState({
      posts: state => state.post.posts,
      title: state => state.post.title,
      body: state => state.post.body,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      limit: state => state.post.limit,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
    })
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