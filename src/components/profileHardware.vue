<template>
<div class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{{perfil.opc1}}</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{{perfil.opc2}}</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div class="container">
                <div class="card col-12" style="max-width: 100%;">
                    <div class="row">
                        <div class="col-md-6" >
                            <iframe class="video" :src="perfil.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h3 class="card-title">{{perfil.title}}</h3><br>
                                <p class="card-text">{{perfil.text}}</p><hr>
                                <h5 class="card-title">{{perfil.nombre}}</h5><br>
                                <p class="card-text">{{perfil.texto}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <iframe class="manual" :src="perfil.manual" title="Calameo" frameborder="0"></iframe>
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

