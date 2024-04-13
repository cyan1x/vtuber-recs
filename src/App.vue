<script setup lang="ts">
import VTuberCard from "./components/VTuberCard.vue"
import { vtubers } from "./components/VTuberData"
</script>

<template>
  <div class="cards">
    <VTuberCard v-for="vtuber in vtubers" :key="vtuber.name" :vtuber="vtuber" />
  </div>
</template>

<style scoped>
.cards {
  margin: 2rem;
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
</style>
