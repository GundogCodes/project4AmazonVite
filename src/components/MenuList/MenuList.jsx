import styles from './MenuList.module.scss'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function MenuList( menuItems, handleAddToCart) {
    const items = menuItems.map(item =>
        <MenuListItem
            className={styles.MenuListItem}
            key={item._id}
            handleAddToCart={handleAddToCart}
            menuItem={item}
        />
        )

    return (
        <div className={styles.MenuList}>
            {items}
        </div>
        )
}