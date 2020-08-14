import { Row, Col } from 'react-bootstrap'
const TacoMeButton = ({ handleTacoClick }) => {
  return (
    <Row>
      <Col className="text-center">
        <button onClick={() => handleTacoClick()}>Taco Me</button>
      </Col>
    </Row>
  )
}

export default TacoMeButton
