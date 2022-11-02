<template>
    <div class="container">
        <div class="row">
            <div v-for="tema in temas" :key="tema" class="col-12 col-sm-3">
                <div class="card">
                  <img :src="tema.img" class="img" alt="image">
                  <div class="card-body">
                    <h5 class="card-title"><b>{{tema.title}}</b></h5>
                    <p class="card-text">{{tema.text}}</p>
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
            "title" : "Introduccion a Hardware",
            "text" : "El hardware son aquellos elementos físicos o materiales que constituyen una computadora o un sistema informático.",
            "items" : [
                "Tipos de Mantenimiento",
                "Manuales",
                "Diccionario terminologico"
            ]
        },
        {
            "img":"https://blog.hubspot.es/hubfs/media/lenguajesprogramacion.jpeg",
            "title" : "Logica de Programacion",
            "text" : "La programación es el arte del proceso por el cual se limpia, codifica, traza y protege el código fuente de programas computacionales.",
            "items" : [
                "Desarrollo de un aplicativo",
                "Menus y Submenus en POO",
                "Beneficios de la programacion"
            ]
        },
        {
            "img":"https://theenglishproject.com/wp-content/uploads/2020/11/aprende-ingles-linea.jpg",
            "title" : "Ingles",
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

.info{
  /* background-color:white;
  position: relative;
  padding: 5rem; */
}
.card{
  /* border:inset; */
  /* padding: 1rem; */
  /* align-content: center; */
}
.img {
  max-height: 140px;

}
</style>