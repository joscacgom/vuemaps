import type { GetterTree } from 'vuex'
import type { MapState } from './state'
import type { State } from '../index'

const getters: GetterTree<MapState, State> = {
  isMapLoaded(state) {
    return !!state.map
  },
  map(state) {
    return state.map
  },
  distance(state) {
    return state.distance
  },
  duration(state) {
    return state.duration
  }
}

export default getters
