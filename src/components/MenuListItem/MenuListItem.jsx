import styles from './MenuListItem.module.scss'



export default function MenuListItem({ menuItem, handleAddToCart }){
    return(
        <div className={styles.MenuListItem}>
            <div className={`${styles.imageContainer} flex-ctr-ctr`}>
                <img src={menuItem.img} className={styles.img} />
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.name}>{menuItem.name}</div>
                <div className={styles.buy}>
                    <span>just buy me</span>
                    <button className='btn-sm' href='/items'/>
                </div>
            </div>
        </div>
    )
}