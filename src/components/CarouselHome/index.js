import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "../CarouselHome/styles.module.scss";
function CarouselHome() {
  return (
    <>
      <div className="carousel-inner">
        <Carousel indicators={false} className={styles.sizeComponent}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="images/JovemNaMaquina.jpg"
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
              src="images/JovemOculos.jpg"
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
              src="images/Maquina.jpg"
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

export default CarouselHome;
