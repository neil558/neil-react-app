import './partners.css';
import Carousel from 'react-bootstrap/Carousel';
import {    partner1, partner2, partner3, partner4, partner5,
            partner6, partner7, partner8} 
            from '../../img/partners/import';        

export default function partners() {
return (
<section id='partners'>
    <h2 id="heading" class="pt-3 text-center text-uppercase font-girassol col-teal">Our Partners</h2>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner2}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner3}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner4}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner5}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner6}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner7}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner8}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
</section>
)
}