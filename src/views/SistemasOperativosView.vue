<template>
   <div>
    <h1>Sistemas operativos</h1>
    <div class="row">
      <div class="col-sm-3 col-12">
        <div class="container">
          <div class="card" style="width: 18rem;">
            <div class="card-head">
              <img src="https://wallpaperaccess.com/full/814814.jpg" class="img" alt="software">
            </div>
            <div class="card-body">
              <h5 class="card-title">DEBIAN</h5>
              <p class="card-text">Recomendaciones</p>
              <ul class="list-group list-group-flush" >
                <li class="list-group-item">Libre distribución.</li>
                <li class="list-group-item">El código fuente debe ser incluido por completo</li>
                <li class="list-group-item">Se deben permitir trabajos derivados o modificaciones.</li>
                <li class="list-group-item">No discriminar contra personas o grupos.</li>
                <li class="list-group-item">  No discriminar en función del objetivo final que se persigue</li>
              </ul>
              <a href="https://www.debian.org/index.es.html" class="btn btn-primary">Mas informacion</a>
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
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Manuales</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <div class="alinear">
                <h4>¿QUE ES DEBIAN?</h4>
                <p>
                  El Proyecto Debian comenzó en 1993, cuando Ian Murdock hizo una invitación a todos los desarrolladores de software a contribuir a una distribución completamente coherente basada en el entonces relativamente nuevo núcleo Linux. El centro de un sistema operativo es el núcleo Kernel . El núcleo es el programa más importante en la computadora, realiza todo el trabajo básico y le permite ejecutar otros programas. Una gran parte de las herramientas básicas que completan el sistema operativo, vienen del proyecto GNU; de ahí los nombres: GNU/Linux, GNU/kFreeBSD, y GNU/Hurd. Estas herramientas también son libres.
                  </p>
                <h5>¿QUE ES DEBIAN GNU/Linux?</h5>
                <p>
                  Lo que forman una distribución de software única llamada Debian GNU/Linux es la combinación de la filosofía y metodología de Debian, las herramientas GNU, el núcleo Linux, y otro software libre importante.La atención que pone Debian a los detalles nos permite producir una distribución de alta calidad, estable y escalable. Debian es especialmente popular entre los usuarios avanzados debido a su excelencia técnica y compromiso con las necesidades y expectativas de la comunidad Linux. Debian también introdujo muchas características a Linux, que ahora son comunes.
                </p>
                <div class="image">
                      <img class="rounded" src="https://i.blogs.es/82572c/debian-logo/1366_2000.jpg" alt="debian">
                      <img class="rounded" src="https://sites.google.com/site/sistemasoperativoshn/_/rsrc/1461901543156/gnu-linux/gnulinux-logo.png" alt="gnu">
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
              <div class="container">
                <iframe class="video" src="https://www.youtube.com/embed/Iya2b7F0WYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
              <iframe class="manual" src="https://es.calameo.com/read/0011079511283764ee0a3" title="Calameo" frameborder="0"></iframe>
            </div>        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card-head{
  align-content: center;
  padding: 2rem;
}
.img{
  border-radius: 100%;
  max-height: 150px;
  border: solid gray;
}
.alinear{
  text-align: left;
}
.image{
  display: flex;
}
.rounded{
  max-width: 500px;
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
