import { useState } from 'react'
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'
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

export const Loading = () => {
  return (
    <Row>
      <Col className="mt-4 text-center">
        <Spinner animation="border" size="lg" />
      </Col>
    </Row>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ candidate }) => {
  const [currentCandidate, setCurrentCandidate] = useState(0)

  console.log(candidate.candidates[currentCandidate])
  return (
    <>
      <Row>
        <Col>
          <Card className="mx-auto rounded" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={candidate.candidates[currentCandidate].photos[0].photo_url}
            />
            <Card.Body>
              <Card.Title>
                {candidate.candidates[currentCandidate].name}
              </Card.Title>
              <Card.Text>
                {candidate.candidates[currentCandidate].vicinity}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            style={{ borderRadius: '50px' }}
            className="btn-warning mt-2"
            onClick={() => setCurrentCandidate(currentCandidate + 1)}
          >
            Taco Me Again
          </Button>
        </Col>
      </Row>
    </>
  )
}
