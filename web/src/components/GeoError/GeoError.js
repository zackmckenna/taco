import { Row, Col } from 'react-bootstrap'

const GeoError = ({ geoError }) => {
  return (
    <Row>
      <Col className="text-center">
        <h3>Error retrieving location</h3>
        <p>{geoError}</p>
        <p>
          to find your nearest taco, please allow us to use your current
          location. You can do this by clicking the icon left of the address in
          chrome and setting &quot;location&quot; to &quot;allow&quot;
        </p>
      </Col>
    </Row>
  )
}

export default GeoError
