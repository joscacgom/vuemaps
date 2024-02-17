import type { GetterTree } from 'vuex'
import type { LocationState } from './state'
import type { State } from '../index'

const getters: GetterTree<LocationState, State> = {
  isGeolocationEnabled(state) {
    return !!state.Location
  },
  isloading(state) {
    return state.loading
  },
  userLocation(state) {
    return state.Location
  },

  locations(state) {
    return state.locations
  },

  loadingLocations(state) {
    return state.loadingLocations
  }
}

export default getters
