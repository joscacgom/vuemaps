import type { Module } from 'vuex'
import type { State } from '../index'

import state, { type LocationState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const LocationModule: Module<LocationState, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default LocationModule
