import type { MutationTree } from 'vuex'
import type { LocationState } from './state'
import type { Feature } from '@/interfaces/location'

const mutation: MutationTree<LocationState> = {
  setUserLocation(state: LocationState, payload: any) {
    state.Location = [payload.longitude, payload.latitude]
    state.loading = false
  },

  setIsLoadingLocations(state: LocationState) {
    state.loadingLocations = true
  },

  setLocations(state: LocationState, payload: Feature[]) {
    state.locations = payload
    state.loadingLocations = false
  }
}

export default mutation
