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
  //console.log(carouselItems, 'carouselItems')

  const handleSelect = (selectedIndex) => {
      console.log('clicked')
      setIndex(selectedIndex);
  };
  
  
  
   
 
  return (
   <div className={styles.container}>
    <Carousel activeIndex={styles.index} onSelect={handleSelect} className={styles.Carousel}>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][53]._id}`} > <Image 
          className={styles.img}
          src='./img/cannon.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][53].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][53].description}</p>
          <a href= {`item/${promotionItems[0][53]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][48]._id}`} > <Image 
          className={styles.img}
          src='./img/gnome.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][48].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][48].description}</p>
          <a href= {`item/${promotionItems[0][48]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][36]._id}`} > <Image 
          className={styles.img}
          src='./img/MobyClick.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][36].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][36].description}</p>
          <a href= {`item/${promotionItems[0][36]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][51]._id}`} > <Image 
          className={styles.img}
          src='./img/rey.png'
          /> </Link>
          <Carousel.Caption style={{color:'white', background:'rgba(0,0,0,0.5)', borderRadius:'15px' } } className={styles.caption}>
          <h3 className={styles.cardTitle}> {carouselItems[0][51].name} </h3>
          <p className={styles.itemDesc}>{promotionItems[0][51].description}</p> 

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}


