import styles from './PromoCollection.module.scss'; 
import items from '../../../config/seed.cjs'

export default function PromoCollection({ item }) {
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

