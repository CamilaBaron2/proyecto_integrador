<template>
    <div>
        <div class="row">
            <div class="col-sm-3 col-12">
                <div class="container">
                    <div class="card" style="width: 18rem;">
                        <div class="card-head">
                            <img :src="perfil.perfil" class="img" alt="software">
                        </div>
                        <div class="card-body">
                            <h5  class="card-title">{{perfil.nombre}}</h5>
                            <p class="card-text">Caracteristicas</p>
                            <ul class="list-group list-group-flush" >
                                <li v-for="caracteristica in perfil.caracteristicas" :key="caracteristica" class="list-group-item">{{caracteristica}}</li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="col-sm-9 col-12">
                <div class="container">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Definicion</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Instalacion</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Manual</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="row alinear">
                                <div class="col-6" v-for="definicion in perfil.definicion" :key="definicion">
                                    <h4>{{definicion.title}}</h4>
                                    <p>
                                    {{definicion.contenido}}
                                    </p>
                                    <img class="rounded" :src="definicion.img" alt="imagen">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div class="container">
                                <iframe class="video" :src="perfil.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <iframe class="manual" :src="perfil.manual" title="Calameo" frameborder="0"></iframe>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{ 
        url: null,
        indice: null
    },
    data (){
        return{
            perfil: {}
        }
    },
    mounted () {
        fetch(this.url)
        .then(async response => {
            const data = await response.json()
            let info = data.filter(sistema => sistema.id == this.indice);
            this.perfil = info[0];
        });
  }
}
</script>

<style scoped>

.card-head{
  align-content: center;
  padding: 2rem;
}
.img{
  border-radius: 100%;
  max-width: 200px;
  border: solid gray;
}
.alinear{
  text-align: left;
  margin-top: 2rem;
}
.rounded{
  max-width: 400px;
}
.container {
  margin-top: 3rem;
}
.video{
  width: 100%;
  height: 400px;
}
.manual{
  width: 100%;
  height: 800px;
}
</style>