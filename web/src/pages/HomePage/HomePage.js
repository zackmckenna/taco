import { useState } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import CandidateCell from 'src/components/CandidateCell'
import GeoError from 'src/components/GeoError'
import GeoPermission from 'src/components/GeoPermission'
import TacoMeButton from 'src/components/TacoMeButton'
import TacoHeader from 'src/components/TacoHeader'
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
    setGeoError(error.message)
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
        {!searchTerm && <TacoHeader />}
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
          <TacoMeButton handleTacoClick={handleTacoClick} />
        )}
        {askForLocation && <GeoPermission requestLocation={requestLocation} />}
        {geoError && <GeoError geoError={geoError} />}
      </Container>
    </>
  )
}

export default HomePage
