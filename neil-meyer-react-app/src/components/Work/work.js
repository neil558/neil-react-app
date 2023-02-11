import './work.css';
import {Container, Row, Col, Card,  } from './import';
import {pic1, pic2, pic3, pic4, pic5, pic6} from '../../img/works/import';

export default function work() {
  
return (
  <section id='work' className='background-color-teal'>
    <Container >
      <Row>
        <Col><h2 className="text-center text-uppercase font-girassol col-brown p-2 mt-2">Our work</h2></Col>
      </Row>
      <Row>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic1} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic3} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic4} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic5} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='p-2 m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Text className='font-girassol'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  )
  }
