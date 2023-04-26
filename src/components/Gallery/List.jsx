import { Container, Row } from "react-bootstrap";
import Card from "./GalleryCard"
import data from "../../data/data.json"
import GalleryCard from "./GalleryCard";

export default function List() {

  return(
    <>
      <Container>
        <Row>
          {
            data.map(
              (element) => {
                return element
                ? <GalleryCard data={element}/>
                : <p>Loading</p>

              }
            )
          }
        </Row>
      </Container>
    </>
  )
}