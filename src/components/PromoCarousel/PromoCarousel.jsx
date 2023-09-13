import styles from './PromoCarousel.module.scss'; 
import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function PromoCarousel({promotionItems}) {
    const [index, setIndex] = useState(0);
  // console.log(promotionItems)
  // console.log(promotionItems[0].name)

  const carouselItems = []
  for (let items of promotionItems) {
    carouselItems.push(items)
  }
  console.log(carouselItems, 'carouselItems')

  const handleSelect = (selectedIndex) => {
      console.log('clicked')
      setIndex(selectedIndex);
  };
  
  
  
   
 
  return (
   <>
    <Carousel activeIndex={styles.index} onSelect={handleSelect} className={styles.Carousel}>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][51]._id}`} > <Image 
          className="d-block w-100"
          src='./img/rey.png'
          /> </Link>
          <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}> {carouselItems[0][51].name} </h3>
          <p className={styles.itemDesc}>{promotionItems[0][51].description}</p> 
          {/* <a href= {`item/${promotionItems[0][51]._id}`} className={styles.sm} > Buy Now! </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][60]._id}`} > <Image 
          className="d-block w-100"
          src='../../img/cannon.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][60].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][60].description}</p>
          {/* <a href= {`item/${promotionItems[4]._id}`} className={styles.sm} > Buy Now! </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][48]._id}`} > <Image 
          className="d-block w-100"
          src='./img/animal.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][48].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][48].description}</p>
          {/* <a href= {`item/${promotionItems[0][48]._id}`} className={styles.sm} > Buy Now! </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][35]._id}`} > <Image 
          className="d-block w-100"
          src='./img/MobyClick.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][35].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][35].description}</p>
          {/* <a href= {`item/${promotionItems[0][48]._id}`} className={styles.sm} > Buy Now! </a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}


