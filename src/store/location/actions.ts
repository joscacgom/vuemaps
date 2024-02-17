import type { ActionTree } from 'vuex'
import type { LocationState } from './state'
import { type State } from '../index'
import { searchApi } from '@/api'
import type { Feature, LocationResponse } from '@/interfaces/location'

const actions: ActionTree<LocationState, State> = {
  getUserLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        commit('setUserLocation', position.coords)
      },
      (error) => {
        console.error(error)
        throw new Error('Geolocation is not supported by your browser')
      },
      { enableHighAccuracy: true }
    )
  },

  async searchLocationByTerm({ commit, state }, term: string): Promise<Feature[]> {
    if (term === '') {
      commit('setLocations', [])
      return []
    }
    const response = await searchApi.get<LocationResponse>(`${term}.json`, {
      params: {
        proximity: state.Location?.join(',')
      }
    })

    commit('setLocations', response.data.features)

    return response.data.features
  }
}

export default actions
