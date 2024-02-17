import type { ActionTree } from 'vuex'
import type { MapState } from './state'
import { type State } from '../index'
import { directionsApi } from '@/api'
import type { DirectionsResponse } from '@/interfaces/directions'

export type LngLat = [number, number]

const actions: ActionTree<MapState, State> = {
  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
    const response = await directionsApi.get<DirectionsResponse>(
      `${start.join(',')};${end.join(',')}`
    )
    const coords = response.data.routes[0].geometry.coordinates

    commit('setDistanceAndDuration', {
      distance: response.data.routes[0].distance,
      duration: response.data.routes[0].duration
    })

    commit('setRoutePolyline', coords)
  }
}

export default actions
