<template>
  <div class="my-navigation">
    <div
        v-for="page in pageNames"
        class="page"
        :class="{
          currentPage: page === modelValue
        }"
        @click="changePage(page)"
    >
        {{page}}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-navigation",
  props: {
    pageNames: Number,
    modelValue: Number
  },
  data(){
    return{
    }
  },
  methods:{
    changePage(newPage){
      this.currentPage = newPage;
      this.$emit("update:modelValue",newPage);
    },
  }
}
</script>

<style scoped>
  .my-navigation{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .page{
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .currentPage{
    border-color: teal;
    color: teal;
  }
</style>