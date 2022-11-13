<template>
    <div>
      <profileHardware :url="url" :indice="$route.params.id"/>
    </div>
  </template>
  
  <script>
  import profileHardware from '@/components/profileHardware.vue';
  
  export default {
    components: {
      profileHardware,
    },
    data() {
      return {
        url: '/Hardware.json'
      }
    },
  }
  </script>
  
  <style scoped>
  </style>