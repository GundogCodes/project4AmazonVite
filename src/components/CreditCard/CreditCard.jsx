 import styles from './CreditCard.module.scss'

 export default function CreditCard({user,setUser, title, imgSrc}){
    
    return(
        <div className={styles.CreditCard}>
            
            <img src={imgSrc} ></img>

        </div>
    )
 }
