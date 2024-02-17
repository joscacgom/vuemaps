import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = import.meta.env.VITE_VUE_APP_MAPBOX_TOKEN as string
if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser')
  throw new Error('Geolocation is not supported by your browser')
}

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
