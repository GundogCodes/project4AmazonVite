import styles from './SmallAd.module.scss'; 

import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SmallAd({promotionItems}) {
    

    const smallAdItems = []
    for (let items of promotionItems) {
      smallAdItems.push(items)
    }
    
    return (
        <main className={styles.SmallAd}>
            <div className={styles.leftCol }>
                <div className={styles. topRow } >
                    <p className={styles.titles} >{promotionItems[0][47].name}</p>
                    <Link to={`item/${promotionItems[0][47]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/gnome.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][47].price}</p>
                </div>
                <div className={styles. midRow } >
                    <p className={styles.titles} >{promotionItems[0][8].name}</p>
                    <Link to={`item/${promotionItems[0][8]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/ring.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][8].price}</p>
                </div>
                <div className={styles. botRow } >
                    <p className={styles.titles} >{promotionItems[0][22].name}</p>
                    <Link to={`item/${promotionItems[0][22]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/maybelline-mascara.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][22].price}</p>
                </div>
            </div>    
             
            <div className={styles.midCol }>
                <div className={styles. topRow } >
                    <p className={styles.titles} >{promotionItems[0][40].name}</p>
                    <Link to={`item/${promotionItems[0][40]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/country-bottle.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][40].price}</p>
                </div>
                <div className={styles. midRow } >
                    <p className={styles.titles} >{promotionItems[0][14].name}</p>
                    <Link to={`item/${promotionItems[0][14]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/jaw.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][14].price}</p>
                </div>
                <div className={styles. botRow } >
                    <p className={styles.titles} >{promotionItems[0][9].name}</p>
                    <Link to={`item/${promotionItems[0][9]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/sonos.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][9].price}</p>
                </div>
            </div>    

            <div className={styles.rightCol }>
                <div className={styles. topRow } >
                    <p className={styles.titles} >{promotionItems[0][54].name}</p>
                    <Link to={`item/${promotionItems[0][54]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/moonshoes.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][54].price}</p>
                </div>
                <div className={styles. midRow } >
                    <p className={styles.titles}>{promotionItems[0][39].name}</p>
                    <Link to={`item/${promotionItems[0][39]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/mountain-bottle.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][39].price}</p>
                </div>
                <div className={styles. botRow } >
                    <p className={styles.titles} >{promotionItems[0][34].name}</p>
                    <Link to={`item/${promotionItems[0][34]._id}`} >  
                    <Image className={styles.smAdImg } src="../../public/img/HowToBasicCode.png" 
                        /> </Link>
                    <p className={styles.price}>${promotionItems[0][34].price}</p>
                </div>
            </div>    
            
        </main>
    )
}


