<template>
  <div class="navbar">
    <h2 @click="$router.push('/')">Main</h2>
    <div class="navbar___btns">
      <my-button class="navbar__btn" @click="$router.push('/posts')">Посты</my-button>
      <my-button class="navbar__btn" @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    h2{
      margin: 0 10px;
    }
    .navbar{
      background: #f1f1f1;
      box-shadow: 2px 2px 4px grey;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
    }
    .navbar__btn{
      margin: 0 10px;
    }
</style>