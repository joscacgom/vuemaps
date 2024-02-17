import type { Feature } from '@/interfaces/location'

export interface LocationState {
  loading: boolean
  Location?: [number, number] // [lat,lng]
  loadingLocations: boolean
  locations: Feature[]
}

function state(): LocationState {
  return {
    loading: true,
    Location: undefined,
    loadingLocations: false,
    locations: []
  }
}

export default state
