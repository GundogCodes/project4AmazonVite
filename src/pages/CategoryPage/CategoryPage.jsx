import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api.cjs'
import * as ordersAPI from '../../utilities/orders-api.cjs'
import styles from './CategoryPage.module.scss'
import MenuList from '../../components/MenuList/MenuList.jsx'
import CategoryBar from '../../components/CategoryBar/CategoryBar.jsx'

export default function Shop({}) {
    //defining useStates
    const [menuItems, setMenuItems] = useState([])
    const [activeCategory, setActiveCategory] = useState('')

    const categoryRef = useRef()
    //defining useEffects
    useEffect(() => {
        async function getItems() {
            const items = await itemsAPI.getAll() //does the get all items
            categoryRef.current = items.reduce((categories, item) => {
                const category = item.category.name
                //if the category is already in the array, return the array
                return categories.includes(category) ? categories : [...categories, category] //if the item is not in the array of the category, add it
            }, [])
            setMenuItems(items)
            setActiveCategory(categoryRef.current[0])
        }
        //calls getItems function in the useEffect
        getItems()
        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()
    }, [])

    //event handlers
    async function handleAddToCart(itemId) {
        const cart = await ordersAPI.addToCart(itemId)
        setCart(cart)
    }

    return (
        <main className={styles.MainContainer}>
            <div>
                <CategoryBar
                    categories={categoryRef.current}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>
            <MenuList
                menuItems={activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category.name === activeCategory)}
                handleAddToCart={handleAddToCart}
            />
        </main>
    )
}

// export default function CategoryPage({ searchableItems }){

// //defining useStates
// const [category, setCategory] = useState('')
// const [categoryItemsArr, setCategoryItems] = useState('')

// // capturing category name from CategoryBar component


// //looking for specific category in searchableItems
// const categoryItems = searchableItems.filter
//     (item => item.category === category)
// categoryItemsArr.push(categoryItems)

//     return(
//         <main className={styles.MainContainer}>
//             <div className={styles.CategoryContainer}>
//                 <div className={styles.CategoryTitle}>
//                     <h1>Category</h1>
//                 </div>
//                 <div className={styles.CategoryItems}>
//                     <div className={styles.CategoryItem}>
//                     {/* display all captured items here */}
//                         <h2>Item</h2>
//                     </div>
//                 </div>
//             </div>
//         <Footer />
//         </main>
//     )
// }