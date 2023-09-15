import {useEffect, useState} from 'react'
import styles from './UserPage.module.scss'
import {Link} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import Footer from '../../components/Footer/Footer'

export default function UserPage({user,setUser}){
   

    
    return(
        
            <div className={styles.UserPage} >
            {user?
            <>
            <h1 className={styles.user}>Hello, {user.name}</h1>
            <div className={styles.userOptions}>
            
            <h1>Your Account</h1>
            
            <div className={styles.row1}>
            <Link to='/payments'>
            <div style={{color:'Black'}} className={styles.box} >
            <img src='https://m.media-amazon.com/images/G/15/x-locale/cs/help/images/gateway/self-service/order._CB661170529_.png'/>
            <div className={styles.pDiv}>
            <p className={styles.title}>Your Orders</p>
            <p>Track, return, cancel an order, download invoice or buy again</p>
            </div>
            
            </div>
            </Link>
            <Link to='/edit'><div style={{color:'Black'}} className={styles.box}>
                <img src='https://m.media-amazon.com/images/G/15/x-locale/cs/contact-us/security._CB660063742_.png'/>
                <div className={styles.pDiv}>
                <p className={styles.title}>Login & Security</p>
                <p>Manage password, email and mobile number</p>
                </div>
                </div>
            </Link>
            <Link to='/address'><div style={{color:'Black'}}  className={styles.box}>
                <img src='https://m.media-amazon.com/images/G/15/x-locale/cs/contact-us/YAaddress._CB660350971_.png'/>
                <div className={styles.pDiv}>
                <p className={styles.title}>Your Addresses</p>
                <p>Edit, remove or set default address</p>
                </div>
                </div>
                </Link>
                </div>
                
                <div className={styles.row2}>
                <Link to='/payments'><div className={styles.box}style={{color:'Black'}}>
                <img src='https://m.media-amazon.com/images/G/15/x-locale/cs/help/images/gateway/self-service/payment._CB661170529_.png'/>
                <div className={styles.pDiv}>
                <p className={styles.title}>Your Payments</p>
                <p>Manage or add payment methods and view your transactions</p>
                </div>
                </div>
                </Link>
                <Link to='/wishlist'><div style={{color:'Black'}} className={styles.box}>
                <img src='https://m.media-amazon.com/images/G/15/x-locale/cs/help/images/gateway/self-service/fshub/fshub_message_center._CB607580114_.png'/>
                <div className={styles.pDiv}>
                <p className={styles.title}>Your Wishlist</p>
                <p>View, purchase, or remove items from wishlist </p>
                </div>
                </div>
                </Link>
                </div>
                </div>
                </>   
                :

                <LoginPage user={user} setUser={setUser} />
            }
            <Footer/>
                </div>
                
                
                )
            }