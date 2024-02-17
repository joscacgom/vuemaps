<template>
  <div v-if="distance" class="direction-details">
    <div class="direction-details__detail">
      Distance: <strong>{{ distance }} Kms </strong>
    </div>
    <div class="direction-details__detail">
      Duration: <strong>{{ duration }} minutes </strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMap } from '@/composables'

const { distance, duration } = useMap()
</script>

<style scoped>
.direction-details {
  display: flex;
  position: fixed;
  bottom: 3rem;
  left: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  background-color: white;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  max-width: 10rem;
}

.direction-details__detail {
  strong {
    color: #00695c;
  }
}
</style>
