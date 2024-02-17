import type { State } from '@/store'
import { computed, onMounted } from 'vue'
import { loadRouteLocation } from 'vue-router'
import { useStore } from 'vuex'

export const useLocation = () => {
  const store = useStore<State>()

  onMounted(() => {
    if (!store.getters['Location/isGeolocationEnabled']) {
      store.dispatch('Location/getUserLocation')
    }
  })

  return {
    loading: computed<boolean>(() => store.getters['Location/isloading']),
    Location: computed<[number, number]>(() => store.getters['Location/userLocation']),
    locations: computed(() => store.getters['Location/locations']),
    loadingLocations: computed<boolean>(() => store.getters['Location/loadingLocations']),
    isGeolocationEnabled: computed<boolean>(() => store.getters['Location/isGeolocationEnabled']),
    searchLocationByTerm: (term: string) => store.dispatch('Location/searchLocationByTerm', term)
  }
}
