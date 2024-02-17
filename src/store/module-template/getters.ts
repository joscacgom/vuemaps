import type { GetterTree } from 'vuex'
import type { ExampleStateInterface } from './state'
import type { State } from '../index'

const getters: GetterTree<ExampleStateInterface, State> = {
  someGetter(/* state */) {
    // return true;
  }
}

export default getters
