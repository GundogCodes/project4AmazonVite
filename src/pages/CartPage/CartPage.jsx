import styles from './CartPage.module.scss';
import { useState, useEffect } from 'react';
import { getCart, checkout, setItemQtyInCart } from '../../utilities/orders-api.cjs';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage({ user, setUser }) {
    const [cart, setCart] = useState(null);
   
    const navigate = useNavigate();

    useEffect(function () {
        async function fetchCartData() {
            const cartData = await getCart();
            setCart(cartData);
        }
        fetchCartData();
    }, []);

    async function handleChangeQty(e, itemId, newQty) {
        const updatedCart = await setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    function renderLineItem(lineItem) {
        return (
            <div key={lineItem._id}>
                <div className={styles.lineItem}>
                    <Link to={`/item/${lineItem.item._id}`}>
                        <img src={lineItem.item.image} className={styles.image} alt={lineItem.item.name} />
                    </Link>
                    <p>Name: {lineItem.item.name}</p>
                    <div className={styles.qty}>
                    <p>Quantity:</p>
                        {!cart.isPaid && (
                            <button
                                className={styles.btnForQty}
                                onClick={(e) => handleChangeQty(e,lineItem.item._id, lineItem.quantity -= 1)}
                            >−</button>
                        )}
                        <span>{lineItem.quantity}</span>
                        {!cart.isPaid && (
                            <button
                                className={styles.btnForQty}
                                onClick={(e) => handleChangeQty(e,lineItem.item._id, lineItem.quantity += 1)}
                            >+</button>
                        )}
                  
                    </div>
                    <p>Price: ${lineItem.item.price.toFixed(2)}</p>
                </div>
                <hr className={styles.lineSeparator} />
            </div>
        );
    }

    async function handleCheckout() {
        await checkout(user._id);
        window.location.reload();
    }

    return (
        <div className={styles.CartPage}>
            <div className={styles.userName}>
                <h1>{user.name}</h1>
            </div>
            <div className={styles.Ordersdetails}>
                <div className={styles.OrdersList}>
                    {!cart || !cart.lineItems || cart.lineItems.length === 0 ? (
                        <div>Whoa there, my dude/dudette!Your cart is empty. 🛒 If Melon Husk catches wind, he might send me off to Mars. Look, I've got a family of 9... cats... to feed. 🐱 While his band sounds like a kazoo in a blender, let's keep him busy. Toss in some items and help a feline family out, will ya?</div>
                    ) : (
                        cart.lineItems.map(item => renderLineItem(item))
                    )}
                </div>
                <div className={styles.columnWrap}>
                    <div className={styles.checkout}>
                        <p>total: ${cart?.lineItems?.reduce((total, lineItem) => total + (lineItem.item.price * lineItem.quantity), 0).toFixed(2)}</p>
                        <button className={styles.checkoutbtn} onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                    <div className={styles.promo}> promotion components here</div>
                </div>
            </div>
        </div>
    );
}
