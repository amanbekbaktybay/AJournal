<template>
  <div class="dialog" v-if="show" @click="hideDialog" >
      <main class="dialog__content" @click.stop>
        <slot></slot>
      </main>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog(){
      this.$emit("update:show",false)
    }
  }
}
</script>

<style scoped>
  .dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog__content{
    min-height: 100px;
    min-width: 300px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  }
</style>