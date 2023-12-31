import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "../Carousel/styles.module.scss";
function Carrousell() {
  return (
    <>
      <div className="carousel-inner">
        <Carousel indicators={false} className={styles.sizeComponent}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="images/IM1.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="images/IM2.webp"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="images/IM3.webp"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carrousell;
