<template>
  <div id="app">
    <Navbar />
    <main class="container">
    <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-image: url("./assets/polynesia.jpg");
  background-size: cover;
  margin: 0;
  min-height: 100vh;
  font-family: 'san-serif';
}
.container {
  width: 500px;
  margin: auto;
}

h1 {
  color: #fff;
  text-align: center;
}
</style>
