<script setup lang="ts">
import VTuberCard from "./components/VTuberCard.vue"
import { vtubers } from "./components/VTuberData"
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
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
