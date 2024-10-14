<script setup >
const lat = ref()
const long = ref()

const getCoords = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    lat.value = position.coords.latitude;
    long.value = position.coords.longitude;
    console.log(lat, long)

  });


}
</script>

<template>
<Card class="weather">
  <button @click="getCoords">GET COORD</button>

  <p>LAT: {{lat}}</p>
  <p>LONG: {{long}}</p>
</Card>
</template>

<style scoped>

</style>