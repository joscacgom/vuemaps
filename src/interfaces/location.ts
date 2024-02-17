export interface LocationResponse {
  type: string
  features: Feature[]
  attribution: string
  url: string
}

export interface Feature {
  type: string
  geometry: Geometry
  properties: Properties
}

export interface Geometry {
  coordinates: number[]
  type: string
}

export interface Properties {
  name: string
  mapbox_id: string
  feature_type: string
  address: string
  full_address: string
  place_formatted: string
  context: Context
  coordinates: Coordinates
  language: string
  maki: string
  poi_category: any[]
  poi_category_ids: any[]
  external_ids: ExternalIDS
  metadata: Metadata
  operational_status: string
}

export interface Context {
  country: Country
  postcode: Place
  place: Place
  address: Address
  street: Place
}

export interface Address {
  id: string
  name: string
  address_number: string
  street_name: string
}

export interface Country {
  id: string
  name: string
  country_code: string
  country_code_alpha_3: string
}

export interface Place {
  id: string
  name: string
}

export interface Coordinates {
  latitude: number
  longitude: number
  routable_points: RoutablePoint[]
}

export interface RoutablePoint {
  name: string
  latitude: number
  longitude: number
}

export interface ExternalIDS {
  foursquare: string
}

export interface Metadata {}
