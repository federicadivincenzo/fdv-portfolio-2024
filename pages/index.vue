<script setup >

import {onMounted} from "vue";
import SkillCard from "~/components/SkillCard.vue";
import WeatherCard from "~/components/WeatherCard.vue";

const gridElement = ref(null)
const rowHeight = ref(null)

onMounted(() => {
  rowHeight.value = gridElement.value.getBoundingClientRect().width/4
})

const layout = [
  {Cstart: 1, Cend: 3, Rstart: 1, Rend: 1},
  {Cstart: 4, Cend: 4, Rstart: 1, Rend: 1},
  {Cstart: 1, Cend: 1, Rstart: 2, Rend: 2},
  {Cstart: 3, Cend: 5, Rstart: 2, Rend: 4},
  {Cstart: 1, Cend: 3, Rstart: 3, Rend: 5},
  {Cstart: 3, Cend: 5, Rstart: 3, Rend: 5},
  {Cstart: 1, Cend: 5, Rstart: 4, Rend: 6},
]

const isHovering = ref(false)

</script>

<template>
  <div class="main-container">
    <div class="main__hero">
      <div>
        <p class="main__hero__incipit"><span class="main__hero__italic">Frontend developer</span> specialized in web creation and <span class="main__hero__italic">accessibility</span></p>
      </div>
      <p class="main__hero__header">FDV<span class="main__hero__reg">®</span></p>
    </div>
    <div ref="gridElement" class="main__grid" :style="`--height: ${rowHeight}px;`">
      <CardText class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${3};--Rstart: ${1};--Rend: ${1};`"></CardText>
      <WeatherCard class="main__grid--item" :style="`--Cstart: ${4};--Cend: ${4};--Rstart: ${1};--Rend: ${1};`"></WeatherCard>
      <CardText class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${1};--Rstart: ${2};--Rend: ${2};`"></CardText>
      <SkillCard class="main__grid--item" :style="`--Cstart: ${3};--Cend: ${5};--Rstart: ${2};--Rend: ${4};`"></SkillCard>
      <CardImage class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${3};--Rstart: ${3};--Rend: ${4};`"></CardImage>
      <PhotoCard class="main__grid--item" :style="`--Cstart: ${3};--Cend: ${5};--Rstart: ${5};--Rend: ${6};`"></PhotoCard>
      <CardText class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${5};--Rstart: ${6};--Rend: ${6};`"></CardText>
      <CardText class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${1};--Rstart: ${7};--Rend: ${7};`"></CardText>
      <CardText class="main__grid--item" :style="`--Cstart: ${2};--Cend: ${2};--Rstart: ${7};--Rend: ${7};`"></CardText>
      <CardText class="main__grid--item" :style="`--Cstart: ${3};--Cend: ${3};--Rstart: ${7};--Rend: ${7};`"></CardText>
      <CardText class="main__grid--item" :style="`--Cstart: ${4};--Cend: ${4};--Rstart: ${7};--Rend: ${7};`"></CardText>
      <CardChat class="main__grid--item" :style="`--Cstart: ${1};--Cend: ${3};--Rstart: ${4};--Rend: ${6};`"></CardChat>

    </div>
  </div>
</template>

<style scoped>


</style>