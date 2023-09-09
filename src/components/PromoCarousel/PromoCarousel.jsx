import styles from './PromoCarousel.module.scss'; 
import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
  const handleSelect = (selectedIndex) => {
      console.log('clicked')
      setIndex(selectedIndex);
    };
  
    // const items = [{ name: 'sports equipment', price: 900 },
    //     {name: 'PS5', price: 3000},
    //     {name: 'womensdress', price: 50}
    // ];
    // const item = items.map(i => 
    //     <PromoItem
    //         name={i.name}
    //         price={i.price}
    //     />
    // )
    // (function carousel() {
    //     let carouselWidth = $(carouselInner)[0].scrollWidth;
    //     let cardWidth = $(carouselItem).width();

    //     let scrollPosition = 0;

    //     $(carouselControlNext).on('click', function () {
    //         if (scrollPosition < (carouselWidth - (cardWidth * 1))) {
    //             console.log('next')
    //             scrollPosition = scrollPosition + cardWidth;
    //             $('.carouselInner').animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });

    //     $(carouselControlPrev).on('click', function () {
    //         if (scrollPosition > 0) {
    //             console.log('prev')
    //             scrollPosition = scrollPosition - cardWidth;
    //             $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });
    // })();
  
 
    
  return (
   
    <Carousel activeIndex={styles.index} onSelect={handleSelect} className={styles.Carousel}>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Active}>
        <Image
          className="d-block w-100"
          src='../../public/img/PS5.png'
        />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>Used PS5</h3>
          <p className={styles.itemDesc}>Comes with instructions on how to fix it</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Inactive}>
        <Image
          className="d-block w-100"
          src='../../public/img/animal-puppet.png'
        />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>Animal Puppet</h3>
          <p className={styles.itemDesc}>AHHHHHHHH beat Dave Grohl in drum battle!!</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Inactive}>
        <Image
          className="d-block w-100"
          src='../../public/img/football.png'
        />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>80% off Sports Equipment</h3>
          <p className={styles.itemDesc}>Tom Brady Signed Footballs- $.01</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


