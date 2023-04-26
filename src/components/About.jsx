import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <section>
      <Container className="bg-danger">

        <Row>
          <Col>
            <img src="https://picsum.photos/300/300"
            alt="profile pitc"/>
          </Col>

          <Col>
            <h1>Hi I am David</h1>
            <p>I am software engineer located in South Florida.  I love JavaScript, Java, MongoDB and React.  I love playing golf, watching sports and spending time with my family</p>
            <p>Contact me: dradjai@yahoo.com</p>
          </Col>

        </Row>
      </Container>

    </section>
   
  )
}