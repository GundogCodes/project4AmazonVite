import styles from './PromoCollection.module.scss'; 
//import PromoItem from '../PromoItem/PromoItem';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default function PromoCollection({promotionItems}) {
    
    const collectionItems = []
    for (let items of promotionItems) {
      collectionItems.push(items)
    }


    return (
        <main className={styles.PromoCollection}>
            <div className={styles.collectionBanner1} >
                <p className={styles.p} >{collectionItems[0][60].description}</p>
                <Link to={`item/${promotionItems[0][60]._id}`} className={styles.sm}>
                    <Image className={styles.promCollImg} src='./img/lego-barbie.png'  />
                </Link>
            </div>
            <div className={styles.collectionBanner2} >
                <p className={styles.p} >{collectionItems[0][49].description}</p>
                <Link to={`item/${promotionItems[0][49]._id}`} className={styles.sm}>
                    <Image className={styles.promCollImg} src='./img/pokemon-emerald.png'  />
                </Link>
            </div>
        </main>
    )
}



