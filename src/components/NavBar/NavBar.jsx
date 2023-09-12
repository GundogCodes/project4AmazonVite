import { useEffect, useState, useRef } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './NavBar.module.scss'
import { Link ,useNavigate} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
export default function NavBar({ searchableItems, user, setUser, matchedSearches, setMatchedSearches }) {
    
    return (
        <div className={styles.NavBar}>

            <Link to='/'><img src='https://selenakitt.com/wp-content/files/scamazon.png' /></Link>

            <Link to='/address'><div className={styles.deliverDiv}>
                {user?
                <>
                Deliver to {user.name}
                {user.address?
                <span>{user.address.city} {user.address.zip}</span>
                :
                <>
                <br/>
                <>View your addresses</>
                </>
            }
                </>
                :
                <>Sign in</>
            }
            </div></Link>

            <SearchBar searchableItems={searchableItems} matchedSearches={matchedSearches} setMatchedSearches={setMatchedSearches} />
                

            <Link to='/user'><div className={styles.toUser}>
                {user?
                <>
                Hello, {user.name} <br/>
                <span>View Account</span>
                </>
                :
                <>Sign in to view Account</>
            }
            </div></Link>

            <Link to='/orders'><div className={styles.toOrders}>
                Returns <br/>
                <span> & Orders</span>
            </div></Link>

            <Link to='/cart'><div className={styles.toCart}>
                <div className={styles.cartImg}></div>
                <span>Cart</span>
            </div></Link>

        </div>
    )
}