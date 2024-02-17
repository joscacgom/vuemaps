<template>
  <button v-if="isButtonReady" class="return-button" @click="goToMyLocation">
    Go to my location
  </button>
</template>

<script setup lang="ts">
import { useLocation, useMap } from '@/composables'
import { computed } from 'vue'

const { Location } = useLocation()
const { map, isMapLoaded } = useMap()

const isButtonReady = computed(() => {
  return isMapLoaded.value && Location.value
})

const goToMyLocation = () => {
  map.value.flyTo({ center: Location.value, zoom: 15 })
}
</script>

<style scoped>
.return-button {
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 0.2rem;
  border: none;
  background-color: #004d40;
  color: white;
  padding: 0.75rem;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    background-color: #00695c;
  }
}
</style>
