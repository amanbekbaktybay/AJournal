<template>
  <button class="btn" >
      <slot></slot>
  </button>

</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn{
  align-self: flex-end;
  padding: 10px;
  border: 2px solid teal;
  background: none;
  color: teal;

}
</style>