import type { State } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'
import mapboxgl from 'mapbox-gl'
import type { LngLat } from '@/store/map/actions'

export const useMap = () => {
  const store = useStore<State>()

  return {
    map: computed(() => store.getters['Map/map']),
    distance: computed(() => store.getters['Map/distance']),
    duration: computed(() => store.getters['Map/duration']),
    isMapLoaded: computed(() => store.getters['Map/isMapLoaded']),
    setMap: (map: mapboxgl.Map) => store.commit('Map/setMap', map),
    setLocationMarkers: (locations: any[]) => store.commit('Map/setLocationMarkers', locations),
    getRouteBetweenPoints: (start: LngLat, end: LngLat) =>
      store.dispatch('Map/getRouteBetweenPoints', { start, end })
  }
}
