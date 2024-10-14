<script setup >
defineProps({
  colorCode: {
    type: String,
    default: "#000"
  }
})
</script>

<template>
  <div class="skill-chip" :style="`--chip-bg-color: ${colorCode};`">
    <p class="skill-chip__text" >
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>

</style>