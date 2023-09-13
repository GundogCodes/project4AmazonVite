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


    //make a dang for loop!! thank you Teo 
    // const promotionItems = [
    //     searchableItems[i]
    // ] 
    // console.log(promotionItems, 'promotionItems')

    let promotionItems = [searchableItems]
    for (let i = 0; i < searchableItems.length; i++){
        promotionItems.push(searchableItems)
        //searchableItems.push(promotionItems)
        console.log([promotionItems])
    }
    console.log([promotionItems])

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

