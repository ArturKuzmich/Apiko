<template>
  <div class="login_item">
    <label>{{label}}</label>
    <input  :value="value"  @input="updateSelf($event.target.value)" :type="type" :placeholder="placeholder"/>
    <svg v-if="isShowSvg" @click="() => this.callBack()"  class="is_show" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z" fill="black"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "input_group",
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    isShowSvg: {
      type: Boolean,
      required: true
    },
    callBack: {
      type: Function,
      required: false
    }, ///change visibility password
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      required: true,
    },
    label: {
      type: String,
      required: false
    }
  },
  methods: {
    updateSelf(value) {
      this.$emit("input", value);
    },

  }
}
</script>

<style scoped>
.login_item{
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
}
.login_item label{
  text-align: start;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
  margin:  0 0 4px 0;
}
.login_item input {
  outline: none;
  background: #F9FAFB;
  border: 1px solid #DEDEE0;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: rgba(102, 102, 102, 0.466455);
  height: 58px;
  padding: 0 0 0 13px;
}
.is_show{
  position: absolute;
  right: 18px;
  top: 50%;
  cursor: pointer;
}
</style>