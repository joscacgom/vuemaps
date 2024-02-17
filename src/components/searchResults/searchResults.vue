<template>
  <div v-if="loadingLocations" class="alert-loading">
    <p>Loading locations...</p>
  </div>
  <ul v-else-if="locations.length > 0" class="search-results">
    <li
      v-for="location in locations"
      class="search-results__result"
      :class="{ active: location.id === activeLocation }"
      :key="location.id"
      @click="selectLocation(location)"
    >
      <h3 class="search-results__result--title">{{ location.text }}</h3>
      <p class="search-results__result--description">{{ location.place_name }}</p>
      <button class="search-results__result--button" @click.self="getRouteDirections(location)">Go to</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLocation, useMap } from '@/composables'
import { ref, watch } from 'vue'

const { locations, loadingLocations, Location } = useLocation()
const { map, setLocationMarkers, getRouteBetweenPoints } = useMap()

const activeLocation = ref('')

const selectLocation = (location: any) => {
  activeLocation.value = location.id

  map.value?.flyTo({
    center: location.center,
    zoom: 15
  })
}

const getRouteDirections = (location: any) => {
  if (!Location.value) return

  const [lng, lat] = location.center
  const [startLng, startLat] = Location.value

  const start: [number, number] = [startLng, startLat]
  const end: [number, number] = [lng, lat]

  getRouteBetweenPoints(start, end)
}

watch(locations, (newLocations) => {
  activeLocation.value = ''
  if (newLocations.length > 0) {
    setLocationMarkers(newLocations)
  }
})
</script>

<style scoped>
.alert-loading {
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  text-align: center;
}
.search-results {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
}

.search-results__result {
  font-family: 'Roboto', sans-serif;
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
}

.search-results__result--title {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}

.search-results__result--description {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.search-results__result--button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #004d40;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-top: 0.5rem;

  &:hover {
    background-color: #00695c;
  }
}

.active {
  background-color: #a6e1db;
}
</style>
