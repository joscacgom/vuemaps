<template>
  <div class="map">
    <div v-if="!isGeolocationEnabled" class="map__loading">
      <span class="map__loading--text"> loading... </span>
    </div>

    <div v-show="isGeolocationEnabled" class="map__container" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useLocation, useMap } from '@/composables'
import mapboxgl from 'mapbox-gl'

const { Location, isGeolocationEnabled } = useLocation()
const { setMap } = useMap()
const mapContainer = ref<HTMLDivElement | null>(null)

const initMap = async () => {
  if (!mapContainer.value || !Location.value) return

  await new Promise((resolve) => setTimeout(resolve, 1000))
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    center: Location.value,
    zoom: 15,
    style: 'mapbox://styles/mapbox/standard'
  })

  const popUp = new mapboxgl.Popup({ offset: 25 })
    .setLngLat(Location.value)
    .setHTML('<h1>Hello World!</h1>')
    .addTo(map)

  const marker = new mapboxgl.Marker().setLngLat(Location.value).setPopup(popUp).addTo(map)

  setMap(map)
}

onMounted(() => {
  if (isGeolocationEnabled.value) {
    return initMap()
  }
})

watch(isGeolocationEnabled, () => {
  if (isGeolocationEnabled.value) {
    initMap()
  }
})
</script>

<style scoped>
.map__loading {
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.map__loading--text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.map__container {
  position: fixed;
  width: 99%;
  height: 98%;
}
</style>
