export const schema = gql`
  type Places {
    candidates: [Candidates]
  }

  type Candidates {
    formatted_address: String
    geometry: Geometry
    name: String
    opening_hours: Open
    photos: [Photo]
    rating: Float
    price_level: Int
    icon: String
    user_ratings_total: Int
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
    lat: Int
    lng: Int
  }

  type Viewport {
    northeast: Location
    southwest: Location
  }

  type Query {
    getPlaces(searchTerm: String, latitude: Float, longitude: Float): Places!
  }
`
