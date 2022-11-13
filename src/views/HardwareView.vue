<template>
  <div class="container">
      <h1>HARDWARE</h1>
      <div class="row">
          <div v-for="ficha in fichas" :key="ficha" class="col-12 col-sm-4 mt-5">
              <div class="card">
              <img :src="ficha.img" class="img" alt="image">
                  <div class="card-body">
                      <h5 class="card-title"><b>{{ficha.title}}</b></h5>
                      <router-link :to="'/hardware2/'+ficha.id">Información</router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
name: 'hardware2',
  data () {
      return{
          fichas: [
              {   
                  "id": 1,
                  "img" : "https://servicioalpc.com/wp-content/uploads/2020/03/IMG_1631-1024x576.jpg",
                  "title" : "Mantenimiento Preventivo", 
              },
              {
                  "id": 2,
                  "img" : "https://www.labtimx.com/wp-content/uploads/2020/02/disipador.jpg",
                  "title" : "Mantenimiento Correctivo", 
              },
              {
                  "id": 3,
                  "img" : "https://www.passmark.com/source/img_posts/bg_home_4_1.jpg",
                  "title" : "Benchmark", 
              },

          ]
      }
  }
}
</script>

<style scoped>
.img{
  max-height: 200px;
}
</style>

