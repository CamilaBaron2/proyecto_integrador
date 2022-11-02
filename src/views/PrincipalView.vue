<template>
  <div>
    <div class="header">
      <div class="row">
        <div class="col-1">
          <a class="navbar-brand">
            <img src="../assets/logo-sanmateo.png" height="70" class="d-inline-block align-top" alt="">
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1 class="title">Proyecto integrador</h1>
        </div>
      </div>
    </div>
    <!-- <div class="project">
      <h1>PROYECTO INTEGRADOR</h1>
      <font-awesome-icon icon="fa-solid fa-arrow-right"/>
      <h2>Fundacion Universitaria San Mateo</h2>
      <button type="button" class="btn btn-outline-secondary">¿Para que funciona?</button>
    </div> -->
    <Definition/>
  </div>
</template>

<script>
// @ is an alias to /src
import Definition from '../components/Definition.vue'

export default {
  name: 'PrincipalView',
  components: {
    Definition
  }
}
</script>
<style scoped>
  .header {
    background-image: url('../assets/hands-2178566_1920.jpg');
    height: 500px;
    opacity: 60%;
    background-size: cover;
    background-repeat:no-repeat;
    background-position: bottom center;
  }
  .project{
    position: relative;
  }
  h1{
    color: #34495E;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
  h2{
    margin-top: -5px;
    color:#34495E;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .btn{
    margin:150px 0 2rem  1000px;
    width: 15rem;
  }
</style>