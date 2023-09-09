import { useState, useEffect } from 'react'
import styles from './HomePage.module.scss'
import * as itemsAPI from '../../utilities/items-api.cjs'
// import * as ordersAPI from '../../utilities/orders-api.cjs';
//import { Link, useNavigate } from 'react-router-dom';
import PromoAdsSmall from '../../components/PromoAdsSmall/SmallAd' 
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'
import Footer from '../../components/Footer/Footer'
//import PromoCollection from '../../components/PromoCollection/PromoCollection'
//import PromoMedia from '../../components/PromoMedia/PromoMedia.jsx'
//import NavBar from '../../components/NavBar/NavBar'

export default function HomePage({ }) {
    //setting whether the promo items are "picked" by the random generation; 
    const [items, setItems] = useState([])
    //const useNavigate = useNavigate(); 

    useEffect(function () {
        //for if user does an "impulse buy" and adds item to cart right away
        async function getItems() {
            const items = await itemsAPI.getAll();
            setItems(items);
          }
          getItems();
    }, []);

    return(
        <div className={styles.HomePage}>
            <img className={styles.pageBanner} src='../public/img/scamazon-logo.png'/>
                
            <PromoCarousel className={styles.PromoCarousel} 
                // items={items.filter(item => item.name.price === items)}
            />
            <PromoAdsSmall className={styles.PromoAdsSmall}
                // items={items.filter(item => item.name.price === items)}
            />
            <footer>
            <Footer className={styles.Footer} />
            </footer>
            {/* <PromoMedia
                items={items.filter(item => item.name.price === items)}
            />
            <PromoCollection
                items={items.filter(item => item.name.price === items)}
            /> */}

        </div>
    )
}

