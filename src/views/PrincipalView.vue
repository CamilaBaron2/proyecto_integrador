<template>
  <div>
    <div class="header">
      <div class="row">
      </div>
      <div class="row">
        <div class="col">
          <div class="title">
            <h1 >Proyecto integrador</h1>
            <h2>Fundacion Universitaria San Mateo</h2>
          </div>
        </div>
      </div>
    </div>
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
    background-position: bottom center;
  }
  .title{
    padding: 10rem;
  }
  h1{
    color: #34495E;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h2{
    margin-top: -5px;
    color:#34495E;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
 
</style>