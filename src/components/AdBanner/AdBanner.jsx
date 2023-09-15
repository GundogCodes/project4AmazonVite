import styles from './AdBanner.module.scss'
import { Link } from 'react-router-dom'
export default function AdBanner({promotionItems, pickerArr,}){



    return(
        <div className={styles.AdBanner}>
            
            <div className={styles.leftMost}>
                <p>Pick up where you left off</p>
                <Link to={`/item/${promotionItems[1][pickerArr[1]]._id}`}><img className={styles.echo} src={promotionItems[1][pickerArr[1]].image}/></Link>
                <div className={styles.dealDiv}>
                <p className={styles.echoPrice}>${promotionItems[1][pickerArr[1]].price}</p> <span>Deal</span>
                </div>
                <h6>Scamazon Home, accessories, and more</h6>
            </div>

            
            <section className={styles.middle}>
            <div className={styles.middleOne}>
                <p>Keep shopping for</p>
                <section>

                <Link to={`/item/${promotionItems[1][pickerArr[2]]._id}`}><img className={styles.ring} src={promotionItems[1][pickerArr[2]].image}/></Link>


                <aside>
                <p>{promotionItems[1][pickerArr[2]].name}</p>
                <p>{promotionItems[1][pickerArr[2]].price} </p>
                <p className={styles.lp}>List Price <span>  $59.99</span></p>
                </aside>
                </section>
            </div>
            <div className={styles.middleTwo}>

            <Link to={`/item/${promotionItems[1][pickerArr[3]]._id}`}><img className={styles.ps5} src={promotionItems[1][pickerArr[3]].image}/></Link>
                <aside>
                <p>{promotionItems[1][pickerArr[3]].name}</p>
                <p>${promotionItems[1][pickerArr[3]].price} </p>
                <p className={styles.lp}>15% off</p>
                </aside>

            </div>
            </section>


            <div className={styles.rightMost}>
            <div className={styles.rightTop}>
                <p>Buy again</p>
                <Link to={`/item/${promotionItems[1][pickerArr[4]]._id}`}><img style={{borderRadius:'15px',borderColor:'black',borderWidth:'2px'}} className={styles.meta} src={promotionItems[1][pickerArr[4]].image}/></Link>
                <span> {promotionItems[1][pickerArr[4]].description.substring(0,10)}</span>

            </div>
            <div className={styles.rightBottom}>

            <Link to={`/item/${promotionItems[1][pickerArr[0]]._id}`}><img className={styles.iphone} src={promotionItems[1][pickerArr[0]].image}/> </Link>
                <span> {promotionItems[1][pickerArr[0]].name}</span>

            </div>
            </div>
        </div>
    )
}
