import type { ActionTree } from 'vuex'
import type { ExampleStateInterface } from './state'
import { type State } from '../index'

const actions: ActionTree<ExampleStateInterface, State> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
