<template>
  <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Polynesia islands</router-link>
      <router-link to="/add">Add </router-link>
  </div>
</template>

<style scoped>
.navbar {
  background-color: rgb(13, 39, 70);
  padding: 0.6rem 0 0.6rem;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: gray;
}
</style>