import styles from './PromoSeasonal.module.scss'; 
import items from '../../../config/seed.cjs'

export default function PromoSeasonal({ item }) {
    
    const promoItems = item.map(i => 
        <items
            item={i}
        />
    )
    
    return (
        <div>

        </div>
    )
}