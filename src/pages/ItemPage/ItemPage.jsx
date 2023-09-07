import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../utilities/items-api.cjs';
import styles from './ItemPage.module.scss';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Ratings from '../../components/Ratings/Ratings';
import { addToCart, getCart } from '../../utilities/orders-api.cjs';

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cart, setCart] = useState(null);

  console.log('test Cart:', cart);
  async function handleAddToCart() {
    const updatedCart = await addToCart(id);
    setCart(updatedCart);
  }

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
          <Row>
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
                    <Button
                      onClick={handleAddToCart}
                      className="btn-block"
                      type="button"
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className="btn-block" type="button">
                      Add To Wishlist
                    </Button>
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
