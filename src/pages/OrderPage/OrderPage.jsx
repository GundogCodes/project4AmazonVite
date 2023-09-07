import styles from './OrderPage.module.scss'
import {useState, UseEffect} from 'react'
// import {Link} from 'react-router-dom'

// import * as ordersAPI from '../../utilities/orders-api'
// import Logo from '../../components/Logo/Logo'
// import UserLogout from '../../components/LoginForm'
// import NavBar from '../../components/NavBar'

export default function OrderPage({user, setUser}) {
    //State
    const [orders, setOrders] = useState([])
    const [activeOrder, setActiveOrder] = useState(null)

    //Side Effect
        //User Logged In. Default to logout. This would be Nav bar
        //Empty orders
    useEffect(function () {
        async function fetchOrderHistory() {
            const orders = await ordersAPI.getOrderHistory();
            setOrders(orders);
            setActiveOrder(orders[0] || null);
        }
        fetchOrderHistory();
    }, []);

    //Event Handlers
    function handleSelectOrder(order) {
        setActiveOrder(order);
    }

    //Rendered UI
    return(
        <main classname = {styles.OrderPage}>
            <aside classname={styles.NavBar}>
                <NavBar/>
            </aside>
            <OrderList
                orders={orders}
                activeOrder={activeOrder}
                handleSelectOrder={handleSelectOrder}
            />
            <OrderDetail
                order={activeOrder}
            />
        </main>
    )
}