import { Card, Button } from 'react-bootstrap'
export const QUERY = gql`
  query($searchTerm: String!, $latitude: Float, $longitude: Float) {
    candidate: getPlaces(
      searchTerm: $searchTerm
      latitude: $latitude
      longitude: $longitude
    ) {
      candidates {
        name
        rating
        formatted_address
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
  const firstCandidate = candidate.candidates[0]
  console.log(candidate.candidates[0])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={firstCandidate.photos[0].photo_url} />
      <Card.Body>
        <Card.Title>{firstCandidate.name}</Card.Title>
        <Card.Text>{firstCandidate.rating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
