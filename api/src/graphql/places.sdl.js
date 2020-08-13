export const schema = gql`
  type Places {
    candidates: [Candidates]
  }

  type Candidates {
    formatted_address: String
    geometry: Geometry
    name: String
    open_now: Boolean
    photos: [Photo]
    rating: Float
  }

  type Photo {
    height: Int
    html_attributions: String
    photo_reference: String
    width: Int
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
    getPlaces(searchTerm: String): Places!
  }
`
