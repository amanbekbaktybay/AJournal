<template>
  <div  v-if="posts.length !== 0">
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="removePost"
      />
    </transition-group>
  </div>
  <div class="" v-else>
    <h3 style="color: indianred;">Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  props: {
    posts:{
      type: Array,
      required: true,
    },
  },
  methods: {
    removePost(post){
      this.$emit("remove", post);
    }
  }
}
</script>

<style scoped>
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all .5s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  .post-list-move {
    transition: transform 1.5s ease;
  }
</style>