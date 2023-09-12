import styles from './SmallAd.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';


export default function SmallAd({promotionItems}) {
    

    const smallAdItems = []
    for (let items of promotionItems) {
      smallAdItems.push(items)
    }
    console.log(smallAdItems, 'smallAdItems')
    
    return (
        <main className={styles.SmallAd}>
            <div className={styles.leftAd} >
                <p>Gnome on Dragon</p>
                <img className={styles.smAdImg} src="../../public/img/gnome.png" />
                <a href= {`item/${promotionItems[7]._id}`} className={styles.sm} > Buy Now! </a>
            </div>
            <div className={styles.midAd} >
                <p>Spare Tires</p>
                <img className={styles.smAdImg} src="../../public/img/tire.png" />
                <a href= {`item/${promotionItems[6]._id}`} className={styles.sm} > Buy Now! </a>
  
            </div>
            <div className={styles.rightAd} >
                <p>POKEMON EMERALD</p>
                <img className={styles.smAdImg} src="../../public/img/pokemon-emerald.png" />
                <a href= {`item/${promotionItems[8]._id}`} className={styles.sm} > Buy Now! </a>
  
            </div>    
        </main>
    )
}


