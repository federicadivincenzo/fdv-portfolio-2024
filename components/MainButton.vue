<script setup>
import { NuxtLink } from '#components'

defineProps({
  isLink: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <component :is="isLink ? NuxtLink : 'Button'" class="button glass-background">
    <slot></slot>
  </component>
</template>

<style scoped>

</style>