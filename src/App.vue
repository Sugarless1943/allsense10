<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div style="width: 65%;margin: 0 auto">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
