<script setup>

const images = [
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
</script>

<template>
  <Card class="photo-card">
    <carousel :items-to-show="1">
      <slide v-for="image in images" :key="image">
        <img class="carousel__image" :src="image" alt="image">
      </slide>
      <template #addons>
        <div class="carousel__pagination__wrapper">
          <pagination />
        </div>
      </template>
    </carousel>
  </Card>
</template>

<style>
.carousel {
  height: 100%;
}
.carousel__viewport {
  height: 100%;
}
.carousel__track  {
  height: 100%;
  margin: 0;
}

.carousel__slide {
  width: 100%;
}

.carousel__pagination {
  width: fit-content;
  padding: 4px 6px;
  border-radius: 12px;
  background: rgba(226, 220, 220, 0.28);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
}

.carousel__pagination__wrapper {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.carousel__pagination-button::after {
  width: 6px;
  height: 6px;
  border-radius: 6px;
}
</style>