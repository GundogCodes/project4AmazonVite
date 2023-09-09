import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../utilities/items-api.cjs';
import styles from './ItemPage.module.scss';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Ratings from '../../components/Ratings/Ratings';
import { addToCart, getCart } from '../../utilities/orders-api.cjs';
import { getWishList, addToWishList } from '../../utilities/wishList-api.cjs';

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cart, setCart] = useState(null);
  const [wishList, setWishList] = useState(null);

  console.log('krazy kart time:', cart);
  async function handleAddToCart() {
    const updatedCart = await addToCart(id);
    setCart(updatedCart);
  }

  console.log('test wishList:', wishList);
  async function handleAddToWishList() {
    const updatedWishList = await addToWishList(id);
    setWishList(updatedWishList);
  }

  // Get wishList data
  useEffect(() => {
    (async () => {
      try {
        const wishList = await getWishList();
        setWishList(wishList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Get the cart data
  useEffect(() => {
    (async () => {
      try {
        const cart = await getCart();
        setCart(cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Get the item data
  useEffect(() => {
    (async () => {
      try {
        const item = await getById(id);
        setItem(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {item ? (
        <>
          <Row className={styles.row}>
            <Col md={5}>
              <Image
                src={item.image}
                alt={item.name}
                className={styles.picture}
                fluid
              />
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h3>{item.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Ratings value={item.rating} />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                <ListGroup.Item>{item.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${item.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {item.countInventory > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <button
                      onClick={handleAddToCart}
                      className={styles.primary}
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <button
                      onClick={handleAddToWishList}
                      className={styles.secondary}
                      type="button"
                    >
                      Add to Wishlist
                    </button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
}
