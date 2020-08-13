import { useState, useEffect } from 'react'
import { Link } from '@redwoodjs/router'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import CandidateCell from 'src/components/CandidateCell'

import taco from 'src/assets/taco.png'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const [findCandidate, setFindCandidate] = useState(false)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 10000,
  }

  const success = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    console.log('lat', position.latitude, 'lon', position.longitude)
  }

  const error = (error) => {
    console.log(error)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  const handleClick = (term) => {
    setSearchTerm(term)
  }

  const handleTacoClick = () => {
    setSearchTerm('taco')
    console.log(latitude)
    console.log(longitude)
  }

  const handleBurgerClick = () => {
    setSearchTerm('burger')
  }

  const handlePizzaClick = () => {
    setSearchTerm('pizza')
  }

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4 text-center">
            <h1>taco.io</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>quickly locate the nearest taco joint</p>
          </Col>
        </Row>
        {searchTerm && (
          <Row>
            <Col className="text-center mx-auto">
              <CandidateCell
                searchTerm={searchTerm}
                latitude={latitude}
                longitude={longitude}
              />
            </Col>
          </Row>
        )}
        <div className="taco_button">
          <Row>
            <Col className="p-3 text-center">
              <Image src={taco} rounded />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                style={{ borderRadius: '50px' }}
                className="btn-lg btn-warning"
                onClick={() => handleTacoClick()}
              >
                Taco Me
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default HomePage
