import styles from './YourPaymentsPage.module.scss'
import {useState} from 'react'
export default function YourPaymentPage(){
    const [tabClick, setTabClick]= useState(false)

    function handleTabClick(e){
        const innerText = e.target.innerText
        if(innerText=== 'Transactions'){
            setTabClick(true)
        } else if(innerText==='Wallet'){
            setTabClick(false)
        }
    
    }

    return(
        <div className={styles.YourPaymentsPage}>
           <div onClick={handleTabClick} className={styles.header}>
            <p className={styles.title}><img src='https://selenakitt.com/wp-content/files/scamazon.png'/> Pay</p>
            <p>Wallet</p>
            <p>Transactions</p>
           </div>
           {tabClick?
           <div className={styles.transactionsTab}>
            <h1>Transactions</h1>
            <div className={styles.transactionsDiv}>
                <h3>Completed</h3>
            </div>
           </div>
           :
           <div className={styles.walletTab}>
            <div className={styles.headers}>
            <h1>Wallet</h1>
            <h2>Cards and accounts</h2>
            </div>
            <div className={styles.cardsDiv}>

            <section className={styles.cardsList}>List of user cards here</section>
            <div className={styles.cardShow}> Selected Card Here
            </div>
            </div>
           </div>
           }
        </div>
    )
}