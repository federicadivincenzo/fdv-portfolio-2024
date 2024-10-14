<script setup>

import Button from "~/components/MainButton.vue";
import MainButton from "~/components/MainButton.vue";
import Card from "~/components/Card.vue";
</script>

<template>
  <Card>
    <img src="https://images.unsplash.com/photo-1460302293840-dc1a23a7b226?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="canyon image"
         class="card__image">
    <div class="card__body">
      <div class="card__wrapper">
      <div class="card__header">
        <IconButton></IconButton>
      </div>
      <div class="card__footer">
        <div class="card__footer__wrapper glass-background">
          <div class="card__text">
            <div class="card__title">
              Card Header
            </div>
            <div class="card__description">card description</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>

</style>