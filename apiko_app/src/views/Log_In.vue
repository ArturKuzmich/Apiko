<template>
  <div class="apiko_login">
   <form class="login_form" @submit.prevent="login">
     <h2 class="title_form">Login</h2>
     <input_group
         v-model="email"
         :type="'email'"
         :label="'Email'"
         :placeholder="'Example@gmail.com'"
         :isShowSvg="false"
     >
     </input_group>
     <input_group
         v-model="password"
         :type="passwordFieldType"
         :label="'password'"
         :callBack="switchVisibility"
         :isShowSvg="true"
     >
     </input_group>
     <h2 class="apiko_remember">Don’t remember password?</h2>
     <button  class="sumbit_btn" type="submit">Continue</button>
   </form>
    <div class="push_to-register">
      <span>I have no account,</span>
      <router-link to="/register">REGISTER NOW</router-link>
    </div>
 </div>
</template>

<script>
import Input_group from "@/components/input_group";
export default {
name: "Log_In",
  components: {Input_group},
  data(){
    return{
      email: '',
      password: '',
      passwordFieldType: 'password',
    }
  },
  methods: {
  switchVisibility(){
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
  },
    login(){
      let email = this.email;
      let password = this.password;
      if(email.length > 0 && password.length > 0){
        this.$router.push('/')
      }
    },
  }
}
</script>

<style scoped >
  .apiko_login{
    min-width: 425px;
  }
  .login_form{
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    padding: 25px 24px 21px 24px;
    margin-bottom: 21px;
  }
  .login_form .title_form{
    font-family: Helvetica;
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 32px 0;

    color: #282828;
  }
  .login_item{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    position: relative;
  }
  .apiko_remember{
    font-family: Helvetica;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #8C8C8C;
    margin: 0 0 16px 0;
    text-align: end;
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
   }

  .push_to-register{
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
  .push_to-register span{
    color: #2A2A2A;
  }
  .push_to-register a{
    color: #349A89;
    margin-left: 5px;
    text-decoration: none;
  }
</style>