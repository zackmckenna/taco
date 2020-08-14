import { useState } from 'react'
import { Card, Row, Col, Spinner } from 'react-bootstrap'
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
        geometry {
          location {
            lat
            lng
          }
        }
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
        <p>finding tacos</p>
        <Spinner animation="border" size="lg" />
      </Col>
    </Row>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ candidate }) => {
  const [currentCandidate, setCurrentCandidate] = useState(0)

  const getDistance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0
    } else {
      var radlat1 = (Math.PI * lat1) / 180
      var radlat2 = (Math.PI * lat2) / 180
      var theta = lon1 - lon2
      var radtheta = (Math.PI * theta) / 180
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      if (dist > 1) {
        dist = 1
      }
      dist = Math.acos(dist)
      dist = (dist * 180) / Math.PI
      dist = dist * 60 * 1.1515
      if (unit == 'K') {
        dist = dist * 1.609344
      }
      if (unit == 'N') {
        dist = dist * 0.8684
      }
      return dist
    }
  }

  if (candidate.candidates[currentCandidate]) {
    const address = candidate.candidates[currentCandidate].vicinity
      .split(' ')
      .join('+')
    const latitude2 =
      candidate.candidates[currentCandidate].geometry.location.lat
    const longitude2 =
      candidate.candidates[currentCandidate].geometry.location.lng

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
                  {candidate.candidates[currentCandidate].vicinity}{' '}
                  {getDistance(
                    candidate.latitude,
                    candidate.longitude,
                    latitude2,
                    longitude2,
                    'K'
                  ).toFixed(2) * 1000}{' '}
                  meters
                </Card.Text>
                <a
                  className="stretched-link"
                  href={`https://www.google.com/maps/place/${address}`}
                ></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button onClick={() => setCurrentCandidate(currentCandidate + 1)}>
              Taco Me Again
            </button>
          </Col>
        </Row>
      </>
    )
  } else {
    return (
      <Row>
        <Col className="text-center">
          <h1 className="bg-warning p-3">No more tacos here!</h1>
          <p>more food types coming soon...</p>
        </Col>
      </Row>
    )
  }
}
