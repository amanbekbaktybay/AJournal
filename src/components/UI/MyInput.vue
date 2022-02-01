<template>
  <div class="my-input">
    <label :for="label">
      {{label}}
    </label>

    <input
        type="text"
        @input="$emit('update:modelValue',$event.target.value)"
        :value="modelValue"
        :id="label"
        v-focus="isFocus"
    >
  </div>

</template>

<script>
export default {
  name: "my-input",
  props: {
    label: {
      type:String,
      required: true
    },
    modelValue: String,
    isFocus:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .my-input{
    display: flex;
    flex-direction: column;
  }
  input{
    height: 40px;
    border: 2px solid teal;
  }
  input::placeholder{
    margin-right: 10px;
    font-size: 15px;
  }
</style>