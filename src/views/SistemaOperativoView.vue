<template>
  <div>
    <profile :url="url" :indice="$route.params.id"/>
  </div>
</template>

<script>
import profile from '@/components/profile.vue';

export default {
  components: {
    profile,
  },
  data() {
    return {
      url: '/sistemasOperativos.json'
    }
  },
}
</script>

<style scoped>
</style>
