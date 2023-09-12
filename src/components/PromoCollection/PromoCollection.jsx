import styles from './PromoCollection.module.scss'; 
//import PromoItem from '../PromoItem/PromoItem';

export default function PromoCollection({promotionItems}) {
    
    const collectionItems = []
    for (let items of promotionItems) {
      collectionItems.push(items)
    }
    console.log(collectionItems, 'collectionItems')

// const promoCollection = items.map(i => 
//     <PromoItem
//         name={i.name}
//         price={i.price}
//         image={i.image}
//     /> 
// )

    return (
        <main className={styles.PromoCollection}>
            <div className={styles.collectionBanner} >
                <p className={styles.p} >{collectionItems[5].description}</p>
                <img className={styles.promCollImg} src="../../public/img/lego-barbie.png" />
                <a href= {`categories/${promotionItems[0]._id}`} className={styles.sm} > See all toys! </a>

            </div>
        </main>
    )
}

//check with Andrew for specific collection of items for ONE of his categories. 

