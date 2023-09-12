import { useState, useRef } from 'react';
import styles from './PromoItem.module.scss'; 
import { Link, useNavigate } from 'react-router-dom';


export default function PromoItem() {
    const [activeItem, setActiveItem] = useState([])
    const itemsRef = useRef([])
    const navigate = useNavigate()  

    // useEffect(function () {
    //     //fetching the random items from the API to be displayed in the banners
    //     async function getItems() {
    //         const items = await itemsAPI.getItems(); //getOne?? get?? need the proper function here
    //         itemsRef.current = items.map((i) => {
    //             const item = i.name.price;
    //             return i.name.price
    //         }, []);
    //         setActiveItem(activeItem);

    //     }
    //     getItems();
    // }, []);
    
    // async function linkToDetailPage() {
    //     navigate`item/${item.id}` 
    // }
    
    return (
        <h2 className={styles.itemContainer}>
            <Link to="/item/:id" className={styles.btnSm} >View Item</Link>
        </h2>
    )
}