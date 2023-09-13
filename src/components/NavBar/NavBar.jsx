import { useEffect, useState, useRef } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './NavBar.module.scss'
import { Link ,useNavigate} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
export default function NavBar({ searchableItems, user, setUser, matchedSearches, setMatchedSearches, dataOfMatchedSearches, setDataOfMatchedSearches }) {
    
    return (
        <div className={styles.NavBar}>

            <Link to='/'><img src='https://selenakitt.com/wp-content/files/scamazon.png' /></Link>

            {user ?
                <>
                    <Link to='/address'><div className={styles.deliverDiv}>
                        Deliver to {user.name}
                        {user.address ?
                            <span>{user.address.city} {user.address.zip}</span>
                            :
                            <>
                                <br />

                                <>View your addresses</>

                            </>
                        }
                    </div></Link>

                </>
                :
                <>
                    <Link to='/login'>
                        <>Sign in</>
                    </Link>
                </>
            }

            <SearchBar 
            searchableItems={searchableItems} 
            matchedSearches={matchedSearches} 
            setMatchedSearches={setMatchedSearches}
            dataOfMatchedSearches={dataOfMatchedSearches}
            setDataOfMatchedSearches={setDataOfMatchedSearches}
            />
                

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

            <Link to='/payments'><div className={styles.toOrders}>
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