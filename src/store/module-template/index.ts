import type { Module } from 'vuex'
import type { State } from '../index'

import state, { type ExampleStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const exampleModule: Module<ExampleStateInterface, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default exampleModule
