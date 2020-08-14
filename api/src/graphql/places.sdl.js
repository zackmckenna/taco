export const schema = gql`
  type Places {
    candidates: [Candidates]
    latitude: Float
    longitude: Float
    status: String
  }

  type Type {
    type: String
  }

  type Pluscode {
    compound_code: String
    global_code: String
  }

  type Candidates {
    plus_code: Pluscode
    user_ratings_total: Int
    vicinity: String
    reference: String
    formatted_address: String
    geometry: Geometry
    name: String
    opening_hours: Open
    types: [Type]
    photos: [Photo]
    rating: Float
    price_level: Int
    icon: String
    business_status: String
  }

  type Open {
    open_now: Boolean
  }

  type Photo {
    height: Int
    html_attributions: String
    photo_reference: String
    width: Int
    photo_url: String
  }

  type Geometry {
    location: Location
    viewport: Viewport
  }

  type Location {
    lat: Float
    lng: Float
  }

  type Viewport {
    northeast: Location
    southwest: Location
  }

  type Query {
    getPlaces(searchTerm: String, latitude: Float, longitude: Float): Places!
  }
`
