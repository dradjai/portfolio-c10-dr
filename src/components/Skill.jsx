import { Container, Row, Col } from "react-bootstrap";

export default function Skill() {
  return (
    <section>
      <Container>
      <Row>
          <Col className="text-center">
            <h2>Skills that pays the bills</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SpringBoot</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}