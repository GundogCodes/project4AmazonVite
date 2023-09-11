import { useEffect, useState, useRef } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './NavBar.module.scss'
import { Link ,useNavigate} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
export default function NavBar({ searchableItems, user, setUser }) {
    
    return (
        <div className={styles.SearchBar}>

            <Link to='/'><img src='https://selenakitt.com/wp-content/files/scamazon.png' /></Link>

            <Link to='/address'><div className={styles.deliverDiv}>
                {user?
                <>
                Deliver to {user.name}
                {user.address?
                <span>{user.address.city} {user.address.zip}</span>
                :
                <></>
            }
                </>
                :
                <>Sign in</>
            }
            </div></Link>

            <SearchBar searchableItems={searchableItems} />
                

            <Link to='/user'><div className={styles.toUser}>
                {user?
                <>
                Hello, {user.name}
                <span>View Account</span>
                </>
                :
                <>Sign in to view Account</>
            }
            </div></Link>

            <Link to='/orders'><div className={styles.toOrders}>
                Returns
                <span>& Orders</span>
            </div></Link>

            <Link to='/cart'><div className={styles.toCart}>
                <div className={styles.cartImg}></div>
                <span>Cart</span>
            </div></Link>

        </div>
    )
}