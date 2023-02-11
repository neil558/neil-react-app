import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function ContactUs() {
  return (
<section id='contact-us' className='background-color-teal'>
    <Container>
        <Row>
            <Col className='text-center mt-3 font-girassol'><h2>Contact Us</h2></Col>
        </Row>
        <Form className='font-girassol'>
        <Row>
            <Col>
                <FormGroup className='mb-3' controlId='FirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Your First Name" />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup className='mb-3' controlId='Surname'>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Your Surname" />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <FormGroup className='mb-3' controlId='FirstName'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup className='mb-3' controlId='Surname'>
                <Form.Label>Your requirements</Form.Label>
            <Form.Control type='text' placeholder='Please Specify Your Requirements' />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="Message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control type="text" placeholder="Please Enter Your Message." />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col className="text-start"><Button variant="success" type="submit">Submit</Button></Col>
        </Row>
        </Form>
    </Container>
</section>    
  );
}