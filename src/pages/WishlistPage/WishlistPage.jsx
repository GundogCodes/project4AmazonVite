import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishList, addToWishList, removeItem } from '../../utilities/wishList-api.cjs';
// import * as addToCart from '../ItemPage/Itempage.jsx'
import { addToCart, getCart } from '../../utilities/orders-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
import {Link} from 'react-router-dom'

export default function WishlistPage({user}) {
  const [userWishlist, setUserWishlist] = useState ([]) 
  
  useEffect(() => { 
    (async () => {
      const currentWishlist = await getWishList ()
      setUserWishlist (currentWishlist)
    })
    ()
  })
  console.log(userWishlist)
  //Image, name, price
  const items = userWishlist.items

  return (
    <div className={styles.WishlistPage}>
      {user?
      <>
      <h1>{user.name}'s Wishlist</h1>
      <div id= "container" className={styles.WishlistContainer}>
        {!userWishlist || !items || items.length === 0 ? 
          (<div>Wishlist is empty :(</div>)
          :
          items.map(wishlistItem => (
            <div key={wishlistItem._id}>
              <div className={styles.wishlistItem}>
                <img src={wishlistItem.image} className={styles.image} alt={wishlistItem.name} />
                <p>{wishlistItem.name}</p>
                <p>${wishlistItem.price.toFixed(2)}</p>
                <button onClick={() => removeItem(wishlistItem._id)}>Remove Item</button>
                <button onClick={() => addToCart(wishlistItem._id, wishlistItem._id.delete)}>Add to Cart</button>
              </div>
            </div>
          ))
        } 
      </div>
      </>
      :
      // <h1>Test</h1>
      <LoginPage user={user} setUser={setUser}/>
      }
    </div>
  );
}