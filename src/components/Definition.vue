<template>
    <div class="container">
        <div class="row">
            <div v-for="tema in temas" :key="tema" class="col-12 col-sm-3">
                <div class="card tam">
                  <img :src="tema.img" class="img" alt="image">
                  <div class="card-body tam">
                    <h5 class="card-title tam"><b>{{tema.title}}</b></h5>
                    <p class="card-text tam">{{tema.text}}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <br>
                    <h5><b>Temas</b></h5> 
                    <li v-for="item in tema.items" :key="item" class="list-group-item">{{item}}</li> 
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
name: 'sistemasOperativos',
  data() {
    return {
      temas: [
        {
            "img": "https://media.istockphoto.com/photos/microsoft-edge-picture-id1267185125?k=20&m=1267185125&s=612x612&w=0&h=_z2xmekaEzdOY02NWVnPeCmSqXR3sd7I9GCutIcCNh0=",
            "title": "Sitemas Operativos",
            "text": "Los sistemas operativos son los programas encargados de administrar y gestionar de manera eficiente todos los recursos de un ordenador y otros dispositivos.",
            "items" :[
                "Instalación y  Ficha técnica",
                "Manuales",
                "Diccionario terminologico"
            ] 
            
        },
        {
            "img":"https://concepto.de/wp-content/uploads/2014/10/hardware-2-e1551047236148.jpg",
            "title" : "Introducción a Hardware",
            "text" : "El hardware son aquellos elementos físicos o materiales que constituyen una computadora o un sistema informático.",
            "items" : [
                "Tipos de Mantenimiento",
                "Manuales",
                "Diccionario terminologico"
            ]
        },
        {
            "img":"https://blog.hubspot.es/hubfs/media/lenguajesprogramacion.jpeg",
            "title" : "Lógica de Programación",
            "text" : "La programación es el arte del proceso por el cual se limpia, codifica, traza y protege el código fuente de programas computacionales.",
            "items" : [
                "Desarrollo de un aplicativo",
                "Menus y Submenus en POO",
                "Logica con Java"
            ]
        },
        {
            "img":"https://theenglishproject.com/wp-content/uploads/2020/11/aprende-ingles-linea.jpg",
            "title" : "Inglés",
            "text" : "El hablar ingles mejora las oportunidades laborales, fortalece tu cerebro ademas ",
            "items" : [
                 "Abstract",
                 "Brochure",
                 "Terminology dictionary"
            ]
        }    
    ]
  }

  }
}

</script>

<style scoped>

.container{
  padding: 2rem;
}
.card-body{
  height: 170px;
}
.img {
  max-height: 140px;
}
.container{
  margin-top: 2rem;
}
</style>