import CategoryBar from '../CategoryBar/CategoryBar'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../utilities/items-api.cjs';
import styles from './ItemPage.module.scss';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import Ratings from '../../components/Ratings/Ratings';
import { addToCart, getCart } from '../../utilities/orders-api.cjs';
import { getWishList, addToWishList } from '../../utilities/wishList-api.cjs';

export default function CategoryPage({searchableItems, user, setUser}){
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


    return(
        <div>

        </div>
    )
}