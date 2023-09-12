//import { useState, useEffect } from 'react'
import styles from './HomePage.module.scss'
// import * as ordersAPI from '../../utilities/orders-api.cjs';
//import { Link, useNavigate } from 'react-router-dom';
import PromoAdsSmall from '../../components/PromoAdsSmall/SmallAd' 
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'
import Footer from '../../components/Footer/Footer'
import PromoCollection from '../../components/PromoCollection/PromoCollection'

//import PromoMedia from '../../components/PromoMedia/PromoMedia.jsx'
//import NavBar from '../../components/NavBar/NavBar'

export default function HomePage( {searchableItems} ) {
    //setting whether the promo items are "picked" by the random generation; 
    //const [items, setItems] = useState([])
    //const useNavigate = useNavigate(); 
    //console.log(searchableItems)

    const promotionItems = [
        searchableItems[0],
        searchableItems[1],
        searchableItems[2],
        searchableItems[3],
        searchableItems[4],
        searchableItems[5],
        searchableItems[6],
        searchableItems[7],
        searchableItems[8]
    ]
    console.log(promotionItems, 'promotionItems')

    return(
        <div className={styles.HomePage}>
            <img className={styles.pageBanner} src='../public/img/scamazon-logo.png'/>
                
            <PromoCarousel promotionItems={promotionItems} className={styles.PromoCarousel} 
                // items={items.filter(item => item.name.price === items)}
            />
            <PromoAdsSmall promotionItems={promotionItems} className={styles.PromoAdsSmall}
                // items={items.filter(item => item.name.price === items)}
            />
             {/* <PromoMedia
                items={items.filter(item => item.name.price === items)}
            /> */}
            <PromoCollection promotionItems={promotionItems}
                // items={items.filter(item => item.name.price === items)}
            />
            <footer>
            <Footer className={styles.Footer} />
            </footer>

        </div>
    )
}

