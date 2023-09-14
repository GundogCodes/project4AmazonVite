//import { useState, useEffect } from 'react'
import styles from './HomePage.module.scss';
// import * as ordersAPI from '../../utilities/orders-api.cjs';
//import { Link, useNavigate } from 'react-router-dom';
import PromoAdsSmall from '../../components/PromoAdsSmall/SmallAd';
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel';
import Footer from '../../components/Footer/Footer';
import PromoCollection from '../../components/PromoCollection/PromoCollection';
import AdBanner from '../../components/AdBanner/AdBanner';
//import PromoMedia from '../../components/PromoMedia/PromoMedia.jsx'
//import NavBar from '../../components/NavBar/NavBar'
import BottomAdBanner from '../../components/BottomAdBanner/BottomAdBanner';

export default function HomePage({ searchableItems }) {
  //make a dang for loop!! thank you Teo
  // const promotionItems = [
  //     searchableItems[i]
  // ]
  // console.log(promotionItems, 'promotionItems')

  let promotionItems = [];
  for (let i = 0; i < searchableItems.length; i++) {
    promotionItems.push(searchableItems);
    //searchableItems.push(promotionItems)
    // console.log([promotionItems])
  }
  //console.log([promotionItems])

  return (
    <div className={styles.HomePage}>
      <PromoCarousel
        promotionItems={promotionItems}
        // items={items.filter(item => item.name.price === items)}
      />

      <AdBanner promotionItems={promotionItems} pickerArr={[2, 3, 4, 5, 6]} />

      <PromoAdsSmall
        promotionItems={promotionItems}
        // items={items.filter(item => item.name.price === items)}
      />
      <PromoCollection
        promotionItems={promotionItems}
        // items={items.filter(item => item.name.price === items)}
      />

      <BottomAdBanner
        promotionItems={promotionItems}
        pickerArr={[0, 9, 7, 5, 1]}
      />
      <img src="./img/banner3.png" />

      <div className={styles.Footer}>
        <section>
          <h6>Get to Know Us</h6>
          <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
            <p>Careers</p>
            <p>Scamazon and Our Planet</p>
            <p>Investor Relations</p>
            <p>Press Releases</p>
            <p>Scamazon Science</p>
          </a>
        </section>

        <section>
          <h6>Make Money with Us</h6>
          <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
            <p>Sell on Scamazon</p>
            <p>Supply to Scamazon</p>
            <p>Become an Affiliate</p>
            <p>Protect & Build Your Brand</p>
            <p>Sell on Scamazon Handmade</p>
            <p>Advertise Your Products</p>
            <p>Independently Publish with Us</p>
            <p>Host an Scamazon Hub</p>
          </a>
        </section>

        <section>
          <h6>Amazon Payment Products</h6>
          <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
            <p>Scamazon.com Rewards Mastercard</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Scamazon Currency Converter</p>
            <p>Gift Cards</p>
            <p>Scamazon Cash</p>
          </a>
        </section>

        <section>
          <h6>Let us Help You</h6>
          <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
            {' '}
            <p>Shipping Rates & Policies</p>
            <p>Scamazon Prime</p>
            <p>Returns Are Easy</p>
            <p>Manage Your Content and Devices</p>
            <p>Customer Service</p>
          </a>
        </section>
      </div>
    </div>
  );
}
