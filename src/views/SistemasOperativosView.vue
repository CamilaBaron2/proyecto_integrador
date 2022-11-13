<template>
    <div class="container">
        <h1>SISTEMAS OPERATIVOS</h1>
        <div class="row">
            <div v-for="tema in temas" :key="tema" class="col-12 col-sm-4 mt-5">
                <div class="card">
                <img :src="tema.img" class="img" alt="image">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{tema.title}}</b></h5>
                        <router-link :to="'/sistema-operativo/'+tema.id">Información</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      temas: [
        {
            "id": 1,
            "img":"https://wallpaperaccess.com/full/814814.jpg",
            "title": "Debian",
            "info":"informacion"        
        },
        {
            "id": 2,
            "img": "https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815275/itpro/2015/11/windows-10-screen.jpg",
            "title" : "Windows 10"
        },
        {
            "id": 3,
            "img":"https://media.sketchfab.com/models/2ff9be7c6d634e4ea2ca767cb260b716/thumbnails/f1c0e8d5fef14072aecebb5997d3caf2/106ff4f256154a84abf9302dfa5e1e08.jpeg ",
            "title" : "Ubuntu"
        },
        {
            "id": 4,
            "img":"https://sites.google.com/site/colsupgrupo4/_/rsrc/1466890636898/fedora/fedora24.jpg",
            "title" : "Fedora"
        },
        {
            "id": 5,
            "img":"https://www.bleepstatic.com/content/hl-images/2022/01/13/windows-server-on-fire.jpg",
            "title" : "Windows server 2008"
        }     
    ]
  }

  }
}
</script>

<style scoped>
img{
    max-height: 150px;
}
</style>>
