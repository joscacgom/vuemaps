import type { MutationTree } from 'vuex'
import type { MapState } from './state'
import mapboxgl from 'mapbox-gl'

const mutation: MutationTree<MapState> = {
  setMap(state: MapState, map: mapboxgl.Map) {
    state.map = map
  },

  setDistanceAndDuration(
    state: MapState,
    { distance, duration }: { distance: number; duration: number }
  ) {
    let distanceInKm = distance / 1000
    distanceInKm = Math.round(distanceInKm * 100) / 100
    const durationInMinutes = Math.floor(duration / 60)

    state.distance = distanceInKm
    state.duration = durationInMinutes
  },

  setLocationMarkers(state: MapState, locations: any[]) {
    state.markers.forEach((marker) => marker.remove())
    state.markers = []

    locations.forEach((location) => {
      const [lng, lat] = location.center

      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${location.text}</h3><p>${location.place_name}</p>`
          )
        )
        .addTo(state.map!)
      state.markers.push(marker)
    })

    if (state.map?.getLayer('route')) {
      state.map?.removeLayer('route')
      state.map?.removeSource('route')
      state.distance = undefined
      state.duration = undefined
    }
  },

  setRoutePolyline(state: MapState, coords: number[][]) {
    const start = coords[0]
    const end = coords[coords.length - 1]

    const bounds = new mapboxgl.LngLatBounds([start[0], start[1]], [start[0], start[1]])

    coords.forEach((coord) => bounds.extend([coord[0], coord[1]]))

    state.map!.fitBounds(bounds, {
      padding: 100
    })

    const sourceData: mapboxgl.AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if (state.map?.getLayer('route')) {
      state.map?.removeLayer('route')
      state.map?.removeSource('route')
    }

    state.map?.addSource('route', sourceData)

    state.map?.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#00695c',
        'line-width': 5
      }
    })
  }
}

export default mutation
