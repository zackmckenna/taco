import { useState } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import CandidateCell from 'src/components/CandidateCell'
import Taco from 'src/components/Taco'

import taco from 'src/assets/taco.png'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [geoError, setGeoError] = useState(null)
  const [askForLocation, setAskForLocation] = useState(true)
  const [loading, setLoading] = useState(false)

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 10000,
  }

  const success = (position) => {
    setGeoError(false)
    setLoading(false)
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    console.log('lat', position.latitude, 'lon', position.longitude)
  }

  const error = (error) => {
    setLoading(false)
    console.log(error)
    setGeoError(true)
  }

  const handleTacoClick = () => {
    setSearchTerm('taco')
  }

  const requestLocation = () => {
    setAskForLocation(false)
    setLoading(true)
    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  return (
    <>
      <Container>
        {!searchTerm && (
          <>
            <Row>
              <Col className="mt-4 text-center">
                <h1>taco.io</h1>
                <p>quickly locate the nearest taco joint</p>
              </Col>
            </Row>
          </>
        )}
        <Row>
          <Col className="p-3 text-center">
            {!searchTerm && <Taco />}
            {searchTerm && (
              <Image
                onClick={() => setSearchTerm(null)}
                style={{ height: '4rem' }}
                src={taco}
                rounded
              />
            )}
          </Col>
        </Row>
        {searchTerm && (
          <CandidateCell
            searchTerm={searchTerm}
            latitude={latitude}
            longitude={longitude}
          />
        )}
        {loading && (
          <Row>
            <Col className="text-center">
              <p>retrieving location...</p>
              <Spinner animation="border" />
            </Col>
          </Row>
        )}
        {!searchTerm && latitude && longitude && (
          <Row>
            <Col className="text-center">
              <button onClick={() => handleTacoClick()}>Taco Me</button>
            </Col>
          </Row>
        )}
        {askForLocation && (
          <Row>
            <Col className="text-center">
              <p>to find your nearest taco,</p>
              <p>please allow us to use your current location</p>
              <button onClick={() => requestLocation()}>Allow Location</button>
            </Col>
          </Row>
        )}
        {geoError && (
          <Row>
            <Col className="text-center">
              <h3>Error retrieving location</h3>
              <p>
                to find your nearest taco, please allow us to use your current
                location. You can do this by clicking the icon left of the
                address in chrome and setting 'location' to 'allow'
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default HomePage
