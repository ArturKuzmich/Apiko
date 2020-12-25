<template>
  <div class="apiko_login">
   <form class="login_form" @submit.prevent="login">
     <h2 class="title_form">Login</h2>
     <div class="login_item">
       <label>Email</label>
       <input required v-model="email" type="email" placeholder="Example@gmail.com"/>
     </div>
     <div class="login_item">
       <label>Password</label>
       <input :type="passwordFieldType" required v-model="password" type="password" placeholder=" "/>
       <svg @click="switchVisibility" class="is_show" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z" fill="black"/>
       </svg>
     </div>
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
export default {
name: "Log_In",
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
  .is_show{
    position: absolute;
    right: 18px;
    top: 50%;
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
  }
</style>