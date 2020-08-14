import { Row, Col } from 'react-bootstrap'

const GeoPermission = ({ requestLocation }) => {
  return (
    <Row>
      <Col className="text-center">
        <p>to find your nearest taco,</p>
        <p>please allow us to use your current location</p>
        <button onClick={() => requestLocation()}>Allow Location</button>
      </Col>
    </Row>
  )
}

export default GeoPermission
