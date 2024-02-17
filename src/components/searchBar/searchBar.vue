<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      placeholder="Search for a location"
      v-model="searchTerm"
    />
    <SearchResults />
  </div>
</template>

<script setup lang="ts">
import SearchResults from '@/components/searchResults/searchResults.vue'
import { computed, ref } from 'vue'
import { useLocation } from '@/composables'

const { searchLocationByTerm } = useLocation()

const debouncedTimeout = ref<number>()
const debouncedValue = ref<string>('')

const searchTerm = computed({
  get: () => debouncedValue.value,
  set: (value: string) => {
    if (debouncedTimeout.value) clearTimeout(debouncedTimeout.value)
    debouncedTimeout.value = setTimeout(() => {
      debouncedValue.value = value
      searchLocationByTerm(value)
    }, 500)
  }
})
</script>

<style scoped>
.search-bar {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  z-index: 2;
}
.search-bar__input {
  padding: 0.75rem;
  border-radius: 0.2rem;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.3);
  }
}
</style>
