import { createStore } from 'vuex'

import LocationModule from './location/index'
import type { LocationState } from './location/state'

import MapModule from './map/index'
import type { MapState } from './map/state'

export interface State {
  Location: LocationState
  Map: MapState
}

export default createStore<State>({
  modules: {
    Location: LocationModule,
    Map: MapModule
  }
})
