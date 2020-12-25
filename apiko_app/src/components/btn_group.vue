<template>
  <button  class="sumbit_btn" type="submit">{{text}}</button>
</template>

<script>
export default {
  name: "btn_group",
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    }
  }
}
</script>

<style scoped>
.sumbit_btn{
  background: #349A89;
  border-radius: 5px;
  width: 100%;
  height: 58px;
  outline: none;
  border: none;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>