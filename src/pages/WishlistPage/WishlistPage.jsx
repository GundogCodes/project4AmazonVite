import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss';
import {
  getWishList,

  removeItem
} from '../../utilities/wishList-api.cjs';

import { addToCart, getCart } from '../../utilities/orders-api.cjs';
import LoginPage from '../LoginPage/LoginPage';
import { Link } from 'react-router-dom';

export default function WishlistPage({ user }) {
  const [userWishlist, setUserWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      const currentWishlist = await getWishList();
      setUserWishlist(currentWishlist);
    })();
  }, []);


  //Image, name, price
  const items = userWishlist.items;

  return (
    <div className={styles.WishlistPage}>
      {user ? (
        <>
          <h1>{user.name.toUpperCase()}'S WISHLIST</h1>
          <div id="container" className={styles.WishlistContainer}>
            {!userWishlist || !items || items.length === 0 ? (
              <div>Wishlist is empty :(</div>
            ) : (
              items.map((wishlistItem) => (
                <div key={wishlistItem._id}>
                  <div className={styles.wishlistItem}>
                    <img
                      src={wishlistItem.image}
                      className={styles.image}
                      alt={wishlistItem.name}
                    />
                    <p>{wishlistItem.name}</p>
                    <p>${wishlistItem.price.toFixed(2)}</p>
                    <div className={styles.buttons}>
                      <button
                        className={styles.delete}
                        onClick={() => {
                          const wishList = removeItem(wishlistItem._id);
                          setUserWishlist(wishList);
                        }}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        // <h1>Test</h1>
        <LoginPage user={user} setUser={setUser} />
      )}
    </div>
  );
}
