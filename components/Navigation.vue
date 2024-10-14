<script setup>
defineProps({
  navigationLinks: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <div class="navigation glass-background">
   <NuxtLink v-for="nav in navigationLinks" class="navigation__item" :to="nav.href">{{ nav.label }}</NuxtLink>
  </div>

</template>

<style scoped>

</style>