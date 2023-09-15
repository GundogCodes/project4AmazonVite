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
<<<<<<< HEAD
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][53]._id}`} > <Image 
=======

      <Carousel.Item className={styles.CarouselItem} styles={{backgroundPosition:'cover'}} >
      <Link to={`item/${promotionItems[0][1]._id}`} > <Image 
>>>>>>> dev
          className={styles.img}
          src='./img/sonos.png'
          /> </Link>
<<<<<<< HEAD
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][53].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][53].description}</p>
          <a href= {`item/${promotionItems[0][53]._id}`} className={styles.sm} > Buy Now! </a>
=======
        <Carousel.Caption style={{color:'black'}} className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][1].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][1].description}</p>
          <a href= {`item/${promotionItems[4]._id}`} className={styles.sm} > Buy Now! </a>
>>>>>>> dev
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[0][50]._id}`} > <Image 
          className={styles.img}
<<<<<<< HEAD
          src='./img/gnome.png'
=======
          src='./img/lego-barbie.png'
>>>>>>> dev
          /> </Link>
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[0][50].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][50].description}</p>
          <a href= {`item/${promotionItems[0][48]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
<<<<<<< HEAD
      <Link to={`item/${promotionItems[0][36]._id}`} > <Image 
=======
      <Link to={`item/${promotionItems[0][27]._id}`} > <Image 
>>>>>>> dev
          className={styles.img}
          src='./img/MobyClick.png'
          /> </Link>
        <Carousel.Caption className={styles.caption}>
<<<<<<< HEAD
          <h3 className={styles.cardTitle}>{carouselItems[0][36].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][36].description}</p>
          <a href= {`item/${promotionItems[0][36]._id}`} className={styles.sm} > Buy Now! </a>
=======
          <h3 className={styles.cardTitle}>{carouselItems[0][27].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[0][27].description}</p>
          <a href= {`item/${promotionItems[0][48]._id}`} className={styles.sm} > Buy Now! </a>
>>>>>>> dev
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
      <Link to={`item/${promotionItems[1][9]._id}`} > <Image 
          className={styles.img}
          src='./img/macbook.png'
          /> </Link>
          <Carousel.Caption style={{color:'white', background:'rgba(0,0,0,0.5)', borderRadius:'15px' } } className={styles.caption}>
          <h3 className={styles.cardTitle}> {carouselItems[1][9].name} </h3>
          <p className={styles.itemDesc}>{promotionItems[1][9].description}</p> 

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}


