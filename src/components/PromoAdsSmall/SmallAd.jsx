import styles from './SmallAd.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function SmallAd() {
    
    const items = [{ name: 'Gnome on Dragon', price: 900, image: '../../public/img/gnome.png'},
    {name: 'Spare Tires', price: 3000, image: '../../public/img/tire.png'},
    {name: 'Pokemon Emerald', price: 50, image: '../../public/img/pokemon-emerald.png'}
];
const smallAd = items.map(i => 
    <PromoItem
        name={i.name}
        price={i.price}
        image={i.image}
    /> 
)
    
    return (
        <main className={styles.SmallAd}>
            <div className={styles.leftAd} >
                <p>Gnome on Dragon</p>
                <img src="../../public/img/gnome.png" /> {smallAd[0]}
            </div>
            <div className={styles.midAd} >
                <p>Spare Tires</p>
                <img src="../../public/img/tire.png" />  {smallAd[1]}
            </div>
            <div className={styles.rightAd} >
                <p>POKEMON EMERALD</p>
                <img src="../../public/img/pokemon-emerald.png" />  {smallAd[2]}
            </div>    
        </main>
    )
}


