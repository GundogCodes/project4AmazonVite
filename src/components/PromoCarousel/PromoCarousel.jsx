import styles from './PromoCarousel.module.scss'; 
import items from '../../../config/seed.cjs'

export default function PromoCarousel({ item }){
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