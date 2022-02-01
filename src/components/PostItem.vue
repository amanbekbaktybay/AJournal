<template>
  <div class="post">
    <div class="">
      <div class=""><strong>Название:</strong>{{post.title}}</div>
      <div class=""><strong>Описание:</strong>{{post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button @click="removePost">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  data(){
    return{

    }
  },
  methods:{
    removePost(){
      this.$emit("remove",this.post);
    }
  }
}
</script>

<style scoped>
  .post{
    border: 2px solid teal;
    padding: 20px 15px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
  }
  .post__btns{
    display: flex;
    justify-content: space-between;
    min-width: 160px;
    margin: 0 10px;
  }
</style>