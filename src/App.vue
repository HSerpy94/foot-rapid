<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link to="/">FOOD/RAPID</router-link>
    <div>
      <router-link to="/orders">ORDER</router-link>
      <router-link to="/add">ADD FOOD</router-link>
    </div>
    
  </nav>
  <br>
    <br>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  margin-right: 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
