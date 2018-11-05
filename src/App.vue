<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/layout">Layout</router-link> |
      <router-link to="/Login">Login</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
 export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Layout',
        'Login'
      ]
    })
  }
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
