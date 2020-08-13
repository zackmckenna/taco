import { Card, Button } from 'react-bootstrap'
export const QUERY = gql`
  query($searchTerm: String!, $latitude: Float, $longitude: Float) {
    candidate: getPlaces(
      searchTerm: $searchTerm
      latitude: $latitude
      longitude: $longitude
    ) {
      latitude
      longitude
      candidates {
        plus_code {
          compound_code
          global_code
        }
        name
        rating
        vicinity
        price_level
        opening_hours {
          open_now
        }
        photos {
          height
          photo_reference
          width
          photo_url
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ candidate }) => {
  console.log(candidate)
  return candidate.candidates.map((candidate, index) => {
    return <h1 key={index}>{candidate.name}</h1>
  })
}
