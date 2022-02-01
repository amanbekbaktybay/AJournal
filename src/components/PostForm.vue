<template>
    <form class="create-post" @submit.prevent >
      <h4>Создание поста</h4>
      <section class="form__section form__title">
        <my-input
            v-model="post.title"
            label="Навазние поста"
            :isFocus="true"
        >
        </my-input>
      </section>
      <section class="form__section form__title">
        <my-input
            v-model="post.body"
            label="Описание поста"
        />
      </section>
      <my-button @click="createPost">Создать</my-button>
    </form>
</template>

<script>

  export default {
    data(){
      return{
        post: {
          title: "",
          body: "",
        },
      }
    },
    methods: {
      createPost(){
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: ""
        }
      },
    }
  }
</script>

<style scoped>
  .create-post{
    margin: 10px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .form__section{
    display: flex;
    flex-direction: column;
  }

</style>