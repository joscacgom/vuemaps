import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'en',
    access_token: import.meta.env.VITE_VUE_APP_MAPBOX_TOKEN as string
  }
})

export default searchApi

