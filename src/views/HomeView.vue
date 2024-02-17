<template>
  <ReturnButton />
  <SearchBar />
  <MapView />
  <DirectionDetails />
</template>

<script setup lang="ts">
import { useLocation } from '@/composables'
import MapView from '@/components/mapView/mapView.vue'
import ReturnButton from '@/components/returnButton/returnButton.vue'
import SearchBar from '@/components/searchBar/searchBar.vue'
import DirectionDetails from '@/components/directionDetails/directionDetails.vue'
useLocation()
</script>

<style scoped></style>
