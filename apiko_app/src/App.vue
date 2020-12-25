<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default  {

}
</script>
<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
}
#app {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
  padding: 18px 160px 0 149px;
}




#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
