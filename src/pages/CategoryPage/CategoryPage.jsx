import CategoryBar from '../../components/CategoryBar/CategoryBar'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../utilities/items-api.cjs';
import styles from './CategoryPage.module.scss';

export default function CategoryPage({searchableItems, category}){
//arrays and variables
const { id } = useParams().id
const itemsArr = []

//capture the items of the category and set array of all the items in the cateogry from categoryBar
    for(let item of searchableItems){
        if(item.category === category){
            itemsArr.push(item)
        }
    }

//handle click of item chosen from user, using function from searchbar
    function handleLiClick(e){
        const clickedItem = e.target.innerText
        console.log('clickedItem ', clickedItem)
        const indexOfClickedItem = itemNameArr.indexOf(clickedItem)
        const idOfClickedItem = itemIdArr[indexOfClickedItem]
        console.log('indexofclickedItem', indexOfClickedItem)
        console.log('idOfClickedItem',idOfClickedItem)
        //navigate(`item/${idOfClickedItem}`)
        //setClickedItemID(idOfClickedItem)

        console.log('ClICKEDITEM ID : ', idOfClickedItem)
        navigate(`/item/${idOfClickedItem}`)
    }


//catching item id
    useEffect(() => {
        (async () => {
        try {
            const item = await getById(id);
            setItem(item);
        } catch (error) {
            console.log(error);
        }
        })();
    }, [id]);

    return(
        <div className={styles.rowContainer}>
            <div className={`${styles.imageContainer} flex-ctr-ctr`}>
                <img src={item.img} className={styles.itemImg} />
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.buy}>
                    <span>just buy me</span>
                    <button className='btn-sm' href='/items'/>
                </div>
            </div>    
        </div>
    )
}