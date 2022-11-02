<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <nav class="navbar navbar-light justify-content-between">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/logo-sanmateo.png" height="70" class="d-inline-block align-top" alt="">
      </router-link>
      <router-link class="navbar-brand" to="/sistemas-operativos">Sistemas operativos</router-link>
      <router-link class="navbar-brand" to="/sistemas-operativos">Hardware</router-link>
      <router-link class="navbar-brand" to="/sistemas-operativos">Logica de programación</router-link>
      <router-link class="navbar-brand" to="/sistemas-operativos">Ingles</router-link>
    </nav>
    <div class="row mt-6">
      <div class="col-12">
        <!-- <img class="imagen" alt="imagen" src="./assets/hands-2178566_1920.jpg"> -->
        <!-- <img class="logo" src="./assets/logo-sanmateo.png" alt="logo"> -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.mt-6{
  margin-top: 6rem;
}

.navbar{
  /* padding-left: 3rem; */
}
.imagen{
  /* height: 100vh;
  left: 0px;
  max-height: 60%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
  opacity: 60%; */
}
.logo{
  /* position: relative;
  width: 250px;
  margin:-60px 0 0 -1100px ; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
