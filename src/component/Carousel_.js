import Carousel from 'react-bootstrap/Carousel';

function Carousel_() {
  return (
    <Carousel className='mt-1'>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.kelbymediagroup.com/planetphotoshop/uploads/2015/07/flood-demo.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Products</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sites.create-cdn.net/siteimages/34/8/3/348386/19/5/6/19566271/1000x400.gif?1631797782"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Products ,you wanted.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <img
          className="d-block w-100"
          src="https://sarahjulianne.com/images/1000x400/4-1000x400-sarahjulianne.com.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Products, you saw.</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_;