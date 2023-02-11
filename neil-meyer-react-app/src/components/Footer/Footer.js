import './footer.css'
import {github, facebook, linkden, instagram, google, twitter} from 
        '../../img/icons/01-flat social media icons/72/imports';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return (
      <section id='Footer'>
        <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col><a href="#" className='m-1'><img src={facebook}></img></a></Col>
              <Col><a href="#" className='m-1'><img src={twitter}></img></a></Col>
              <Col><a href="#" className='m-1'><img src={google}></img></a></Col>
              <Col><a href="#" className='m-1'><img src={linkden}></img></a></Col>
              <Col><a href="#" className='m-1'><img src={github}></img></a></Col>
              <Col><a href="#" className='m-1'><img src={instagram}></img></a></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row><Col className='copyright-color'><p id="copyright" className='text-center p-3 font-itim'>© 2020 Copyright: Neil Meyer Designs</p></Col></Row>
        </Container>
      </section>
    )
}
