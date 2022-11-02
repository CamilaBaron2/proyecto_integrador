<template>
 <div> 
  <div class="project">
    <h1>PROYECTO INTEGRADOR</h1>
    <h2>Fundacion Universitaria San Mateo</h2>
    <button type="button" class="btn btn-outline-secondary">¿Para que funciona?</button>
  </div>
 </div>  
</template>

<script>
export default {
  name: 'Principal',
  props: {
    msg: String
  }
}
</script>

<style>
    .imagen{
        height: 100vh;
        left: 0px;
        max-height: 60%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
        opacity: 60%;    
    }
    .logo{
      position: relative;
      width: 250px;
      margin:-60px 0 0 -1100px ;
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
