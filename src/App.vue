<template>
  <div>
    <nav class="navbar navbar-light justify-content-between">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/logo-sanmateo.png" height="70" class="d-inline-block align-top" alt="">
      </router-link>
      <button class="btn btn-outline-secondary"><router-link class="navbar-brand" to="/sistemas-operativos">SISTEMAS OPERTATIVOS</router-link></button>
      <button class="btn btn-outline-secondary"><router-link class="navbar-brand" to="/hardware">HARDWARE</router-link></button>
      <button class="btn btn-outline-secondary"><router-link class="navbar-brand" to="/glosario">GLOSARIO</router-link></button>
      <button class="btn btn-outline-secondary"><router-link class="navbar-brand" to="/ingles">INGLÉS</router-link></button>
    </nav>
    <div class="row mt-6">
      <div class="col-12">
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
}
.button{
  margin-right: 8rem;
}
</style>
