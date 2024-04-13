<script setup lang="ts">
import { ref } from "vue"
import { VTuber } from "./VTuberData"

const props = defineProps<{
  vtuber: VTuber
}>()

const imgSrc = ref(`url('./${props.vtuber.imgName}.webp')`)
</script>

<template>
  <div class="root">
    <div class="img-container">
      <div class="img-border"><div class="img-div"></div></div>
    </div>

    <div class="info-container">
      <div class="title">
        <h2>{{ props.vtuber.name }}</h2>
        <h3>{{ props.vtuber.org }}</h3>
      </div>

      <div class="desc">
        <p>{{ props.vtuber.description }}</p>
      </div>
    </div>

    <div class="genres-container">
      <h3>Genres:</h3>
      <span>{{ props.vtuber.genres.join(", ") }}</span>
    </div>

    <div class="genres-container">
      <h3>Tags:</h3>
      <span>{{ props.vtuber.tags.join(", ") }}</span>
    </div>

    <div class="links-container">
      <h3>Links:</h3>
      <template v-for="(link, website, index) in props.vtuber.links">
        <template v-if="index > 0">, </template>
        <a :href="link">{{ website }}</a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.root {
  background: rgba(245, 255, 255, 0.92);

  /* background: #292929;
  color: #ddd; */

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "image info"
    "image info"
    "genres ."
    "tags ."
    "links .";
  padding: 20px;
  border-radius: 15px;
  grid-gap: 2px;
  width: 550px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 720px) {
  .root {
    /* background-color: green; */
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "info"
      "genres"
      "tags"
      "links";
    grid-auto-flow: column;
  }

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* .root:hover {
  transform: scale(1.2);
  margin: 50px;
} */

.img-container {
  grid-area: "image";
  padding: 10px;
}

.info-container {
  grid-area: "info";
  padding: 10px;
}

.genres-container {
  grid-area: "genres";
  grid-column: span 2;
  padding: 10px;
}

.tags-container {
  grid-area: "tags";
  grid-column: span 2;
  padding: 10px;
}

.links-container {
  grid-area: "links";
  grid-column: span 2;
  padding: 10px;
}

.title {
  padding-bottom: 10px;
}

h2 {
  text-align: left;
}

h3 {
  font-size: 0.8em;
  color: gray;
}

.img-border {
  border: double 3.5px transparent;
  border-radius: 50%;
  background-image: linear-gradient(
      170deg,
      rgba(223, 249, 255, 0.95),
      rgba(236, 227, 250, 0.95)
    ),
    radial-gradient(
      circle farthest-corner at 0.2% 0.5%,
      rgba(123, 11, 208, 0.3) 3.7%,
      rgba(54, 214, 235, 0.4) 92.7%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.img-div {
  background-image: v-bind(imgSrc);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  border-radius: 50%;

  --img-size: 7.5rem;

  min-width: var(--img-size);
  min-height: var(--img-size);
  max-width: var(--img-size);
  /* max-height: var(--img-size); */
  max-height: 100%;
  box-sizing: content-box;
}

a {
  color: #1673cf;
}
</style>
