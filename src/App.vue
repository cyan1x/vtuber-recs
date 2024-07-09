<script setup lang="ts">
import { ref, Ref, computed, onMounted, nextTick } from "vue"
import VTuberCard from "./components/VTuberCard.vue"
import { vtubers, VTuber } from "./components/VTuberData"

// Focus on <input> on page load
const searchElement = ref({}) as Ref<HTMLInputElement>
onMounted(() => {
  nextTick(() => {
    searchElement.value.focus()
  })
})

const keyword = ref("")
const property = ref("any") as Ref<"any" | keyof VTuber>

// Convert arrays and dictionaries to their string representation
function getStringValue(
  value: string | string[] | Record<string, string>
): string {
  return (
    Array.isArray(value)
      ? value.join(", ")
      : value.constructor === Object
        ? Object.keys(value).join(", ")
        : value
  ) as string
}

const filteredVtubers = computed(() => {
  // Match any text in vtuber card
  if (property.value === "any") {
    return vtubers.filter((vtuber) => {
      // Join every value in vtuber object to one huge lowercase string
      return Object.values(vtuber)
        .reduce<string>((prev, curr) => {
          return `${prev}${getStringValue(curr).toLowerCase()}`
        }, "")
        .includes(keyword.value.toLowerCase())
    })
    // Match a specific property
  } else {
    return vtubers.filter((vtuber) => {
      const value =
        vtuber[property.value as Exclude<typeof property.value, "any">]
      return getStringValue(value)
        .toLowerCase()
        .includes(keyword.value.toLowerCase())
    })
  }
})
</script>

<template>
  <div class="base">
    <div class="logo">
      <span>vtuber-recs</span>
    </div>

    <div class="search">
      <input class="search-box" type="text" placeholder="Filter by name, org, description..." ref="searchElement"
        v-model="keyword" />
      <!-- Filter by vtuber property -->
      <!-- <select class="search-select" v-model="property">
      <option value="any">any</option>
      <option value="name">name</option>
      <option value="org">org</option>
      <option value="description">description</option>
      <option value="genres">genres</option>
      <option value="tags">tags</option>
    </select> -->
    </div>

    <div class="cards">
      <VTuberCard v-for="vtuber in filteredVtubers" :key="vtuber.name" :vtuber="vtuber" />
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.2s ease-in-out;
}

.base {
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
}

.logo {
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .base {
    padding: 1.5rem;
  }

  .logo {
    position: fixed;
    top: 0.75rem;
    right: 1rem;
  }
}

@media (min-width: 1024px) {
  .base {
    padding: 2rem;
  }
}

.cards {
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: flex-start;
  gap: 1rem;
}

.search {
  display: flex;
  /* justify-content: center; */
  /* margin-top: 2rem; */
}

.search-box,
.search-select {
  background-color: white;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(36, 36, 36, 0.23); */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.055), 0 3px 6px rgba(0, 0, 0, 0.088);
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.search-box {
  width: 25rem;
  max-width: 100%;
}

.search-box::placeholder {
  color: rgb(164, 164, 164);
}

.search-select {
  text-align: center;
}
</style>
