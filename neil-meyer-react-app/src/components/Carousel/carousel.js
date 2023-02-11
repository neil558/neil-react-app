import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { Pic1, Pic2, Pic3 } from '../../img/slider/import';

export default function carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          height="675px"
          width="1450px"
          className="d-block"
          src={Pic1}
          alt=""
        />
        <Carousel.Caption>
          <h3 className='font-girassol' >Hero Section</h3>
          <p className='font-itim'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt quos
                  aspernatur sint consectetur explicabo eius at? Quasi, et. Id mollitia sint quasi optio tempore eos
                  soluta expedita quas, reprehenderit vitae!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="675px"
          width="1450px"
          className="d-block"
          src={Pic2}
          alt=""
        />

        <Carousel.Caption>
          <h3 className='font-girassol col-teal  '>Hero Section</h3>
          <p className='font-itim'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt quos
                  aspernatur sint consectetur explicabo eius at? Quasi, et. Id mollitia sint quasi optio tempore eos
                  soluta expedita quas, reprehenderit vitae!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="675px"
          width="1450px"
          className="d-block"
          src={Pic3}
          alt=""
        />

        <Carousel.Caption>
          <h3 className='font-girassol '>Hero Section</h3>
          <p className='font-itim'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt quos
                  aspernatur sint consectetur explicabo eius at? Quasi, et. Id mollitia sint quasi optio tempore eos
                  soluta expedita quas, reprehenderit vitae!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
