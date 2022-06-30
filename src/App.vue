<template>
  <div class="logo">
    <h1>{{ msg }}</h1>
    <img src="./assets/logo image.jpg"
     width="100"
     height="150"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'firstpage',
  data () {
    return {
      msg: 'MY PROJECT'
    }
  }
}
</script>

<style>
.logo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
