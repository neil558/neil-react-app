import './employees.css'
import  { Container, Row, Col, Button, OverlayTrigger, Popover, Card }
        from './imports';
import  { person1, person2, person3, person4 } 
        from '../../img/employees/import';

        const popover = (
          <Popover id="popover-basic">
            <Popover.Header as="h3" className='font-girassol' >BIO</Popover.Header>
            <Popover.Body className='font-itim' >
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Inventore maiores quidem mollitia, aspernatur magnam ab eius tempore hic ipsa quos 
            impedit quas eum unde incidunt fuga cupiditate. Perferendis, magni maiores
            </Popover.Body>
          </Popover>
        );
        
        const ToTheRight = () => (
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">BIO</Button>
          </OverlayTrigger>
        );

        const ToTheLeft = () => (
          <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button variant="success">BIO</Button>
          </OverlayTrigger>
        );

        const ToTheTop = () => (
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Button variant="success">BIO</Button>
          </OverlayTrigger>
        );

export default function employees() {
    return (
      <section id="employees" className='back-col'>    
        <Container >
          <Row>
            <Col className='text-center text-uppercase p-2' >
              <h2 className="font-girassol col-samon p-3">Our Employees</h2>  
            </Col>
          </Row>
          <Row>
            <Col className='m-3'><img src={person1} alt="" className='rounded-circle' ></img></Col>
            <Col className='m-3 text-center font-itim'>
              <ToTheRight/>
              <Card className='m-3'>
                <Card.Body className='back-col'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores quidem mollitia, aspernatur magnam ab eius tempore hic ipsa quos impedit quas eum unde incidunt fuga cupiditate. Perferendis, magni maiores</Card.Body>
              </Card>
            </Col>
            <Col className='m-3'><img src={person2} alt="" className='rounded-circle'></img></Col>
            <Col className='m-3 text-center font-itim'>
              <ToTheLeft/>
              <Card className='m-3'>
                <Card.Body className='back-col'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores quidem mollitia, aspernatur magnam ab eius tempore hic ipsa quos impedit quas eum unde incidunt fuga cupiditate. Perferendis, magni maiores</Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className='m-3'><img src={person3} alt="" className='rounded-circle'></img></Col>
            <Col className='m-3 text-center font-itim'>
              <ToTheTop/>
              <Card className='m-3'>
                <Card.Body className='back-col'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores quidem mollitia, aspernatur magnam ab eius tempore hic ipsa quos impedit quas eum unde incidunt fuga cupiditate. Perferendis, magni maiores</Card.Body>
              </Card>
            </Col>
            <Col className='m-3'><img src={person4} alt="" className='rounded-circle'></img></Col>
            <Col className='m-3 text-center font-itim'>
              <ToTheTop/>
              <Card className='m-3'>
                <Card.Body className='back-col'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores quidem mollitia, aspernatur magnam ab eius tempore hic ipsa quos impedit quas eum unde incidunt fuga cupiditate. Perferendis, magni maiores</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )



}