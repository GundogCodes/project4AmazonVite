import styles from './CartPage.module.scss';
import { useState, useEffect } from 'react';
import { getCart, checkout, setItemQtyInCart } from '../../utilities/orders-api.cjs';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage({ user, searchableItems }) {
    const [cart, setCart] = useState(null);
    const [random3Items, setRandom3Items] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, []);

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function setRandomItems() {
        const newRandomItems = [...random3Items];
        const addedIds = new Set();
        if (!newRandomItems.length) { 
            while (newRandomItems.length < 3) {
                const randomItem = getRandomItem(searchableItems);
                if (!addedIds.has(randomItem._id)) {
                    addedIds.add(randomItem._id);
                    newRandomItems.push(randomItem);
                }
            }
        } else {
            const indexToUpdate = Math.floor(Math.random() * 3);
            let newRandomItem = getRandomItem(searchableItems);
            
            while (newRandomItems.includes(newRandomItem)) { 
                newRandomItem = getRandomItem(searchableItems);
            }
            newRandomItems[indexToUpdate] = newRandomItem;
        }
        setRandom3Items(newRandomItems);
    }

    useEffect(() => {
        setRandomItems();
        const interval = setInterval(setRandomItems, 3000);
        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
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
                    <div className={styles.cropText}>
                        <p>{lineItem.item.name}</p>
                    </div>
                    <div className={styles.qty}>
                        <p>Quantity:</p>
                        {!cart.isPaid && (
                            <>
                                <button
                                    className={styles.btnForQty}
                                    onClick={() => handleChangeQty(null, lineItem.item._id, lineItem.quantity - 1)}
                                >−</button>
                                <span>{lineItem.quantity}</span>
                                <button
                                    className={styles.btnForQty}
                                    onClick={() => handleChangeQty(null, lineItem.item._id, lineItem.quantity + 1)}
                                >+</button>
                            </>
                        )}
                    </div>
                    <p>${lineItem.item.price.toFixed(2)}</p>
                    <div className={styles.prime}>
                        <img src="/img/Prime.png" alt="Description of Image" />
                        <p>In Stock</p>
                        <p className={styles.no}>NoReturn</p>
                    </div>
                </div>
                <hr className={styles.lineSeparator} />
            </div>
        );
    }

    async function handleCheckout() {
        await checkout(user._id);
        navigate('/payments');
    }

    return (
        <div className={styles.CartPage}>
            <div className={styles.userName}>
            <h1>Scamazon</h1>
            <p>"We deliver imaginary solutions to your imaginary problems." -CEO and Boy Band Lead Singer, Melon Husk</p>
            </div>
            <div className={styles.Ordersdetails}>
                <div className={styles.OrdersList}>
                    {!cart || !cart.lineItems || cart.lineItems.length === 0 ? (
                        <div>
                            Whoa there, my dude/dudette! Your cart is empty. 🛒 If Melon Husk catches wind, he might send me off to Mars. Look, I've got a family of 9... cats... to feed. 🐱 While his band sounds like a kazoo in a blender, let's keep him busy. Toss in some items and help a feline family out, will ya?
                        </div>
                    ) : (
                        cart.lineItems.map(item => renderLineItem(item))
                    )}
                </div>
                <div className={styles.columnWrap}>
                    <div className={styles.checkout}>
                        <p>
                            total: ${cart?.lineItems?.reduce((total, lineItem) => total + (lineItem.item.price * lineItem.quantity), 0).toFixed(2)}
                        </p>
                        <button className={styles.checkoutbtn} onClick={handleCheckout}>
                            Proceed to checkout
                        </button>
                    </div>
                    <div className={styles.promo}>
                        {random3Items.map(item => (
                            <div key={item._id}>
                                <Link to={`/item/${item._id}`}>
                                    <img src={item.image} alt={item.name} />
                                </Link>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}