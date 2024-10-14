<script setup>
import Navigation from "~/components/Navigation.vue";
import Header from "~/components/Header.vue";

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/work', label: 'Some Work' },
]
</script>

<template>
  <NuxtLayout>
    <div class="main">
      <Header></Header>
      <NuxtPage />
      <Navigation :navigation-links="nav"></Navigation>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>