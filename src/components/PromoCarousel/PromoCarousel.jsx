import styles from './PromoCarousel.module.scss'; 
import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';


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
        <Image
          className="d-block w-100"
          src='../../public/img/PS5.png'
          />
          <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}> {carouselItems[0].name} </h3>
          <p className={styles.itemDesc}>Comes with instructions on how to fix it</p> 
          <a href= {`item/${promotionItems[0]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
        <Image
          className="d-block w-100"
          src='../../public/img/animal-puppet.png'
          />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[4].name}</h3>
          <p className={styles.itemDesc}>AHHHHHHHH beat Dave Grohl in drum battle!!</p>
          <a href= {`item/${promotionItems[6]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
        <Image
          className="d-block w-100"
          src='../../public/img/football.png'
          />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[1].name}</h3>
          <p className={styles.itemDesc}>Tom Brady Signed Footballs- $.01</p>
          <a href= {`item/${promotionItems[1]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}


