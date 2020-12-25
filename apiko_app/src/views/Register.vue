<template>
  <div class="apiko_form">
    <form @submit.prevent="register"  class="register_form">
      <h2 class="title_form">Register</h2>
      <input_group
          v-model="email"
          :type="'email'"
          :label="'Email'"
          :placeholder="'Example@gmail.com'"
          :isShowSvg="false"
      >
      </input_group>
      <input_group
          v-model="name"
          :type="'text'"
          :label="'full name'"
          :placeholder="'Tony Stark'"
          :isShowSvg="false"
      >
      </input_group>
      <input_group
          v-model="password"
          :type="passwordFieldType"
          :label="'password'"
          :isShowSvg="true"
          :callBack="switchVisibility"
      >
      </input_group>
      <input_group
          v-model="repeatPassword"
          :type="passwordFieldType"
          :label="'password again'"
          :isShowSvg="true"
          :callBack="switchVisibility"
      >
      </input_group>
     <btn_group :type="'submit'" :text="'Register'"></btn_group>
    </form>
    <div class="push_to-login">
      <span>I already have an account</span>
      <router-link to="/account/login">LOG IN</router-link>
    </div>
  </div>
</template>

<script>
import Input_group from "@/components/input_group";
import Btn_group from "@/components/btn_group";
export default {
name: "Register",
  components: {Btn_group, Input_group},
  data(){
    return{
      name:'',
      email: '',
      password: '',
      repeatPassword: '',
      passwordFieldType: 'password',
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    register(){
      let name = this.name
      let password = this.password
      let repeatPassword = this.repeatPassword
      if(name.length > 0 && repeatPassword === password){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped >
  .apiko_form{
    min-width: 425px;

  }
  .register_form{
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    padding: 25px 24px 32px 24px;
    margin: 0 0 24px 0;
  }
  .title_form{
    font-family: Helvetica;
    font-size: 22px;
    line-height: 25px;
    color: #282828;
    margin: 0 0 32px 0;
  }
  .push_to-login{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.4px;
    padding: 30px 92px;
  }
  .push_to-login span{
    color: #2A2A2A;
  }
  .push_to-login a{
    color: #349A89;
    margin-left: 5px;
    text-decoration: none;
  }
</style>