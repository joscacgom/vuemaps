import type { Module } from 'vuex'
import type { State } from '../index'

import state, { type MapState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const MapModule: Module<MapState, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default MapModule
