import {useState} from 'react'
import styles from './AddressFormPage.module.scss'
export default function AddressForm(){
    const [address,setAddress] = useState({
        address:'',
        city:'',
        state:'',
        zip:''
    })

    const user ={
        name:"Gunish",
        email:"gundog@gmail.com",
        password:"Gun12345dog",
        phoneNumber:'7805674567',
        address:{
            street:'123 st',
            city:'Edmonton',
            state:'Alberta',
            zip:'6t94t0'
        }
    }

    return(
        <form className={styles.AddressForm} >
            <div className={styles.currentAddress}>
                <h1>Current Address</h1>
                <p className={styles.username}>{user.name}</p>
                <p className={styles.street}>{user.address.street}</p>
                <p className={styles.city}>{user.address.city}</p>
                <p className={styles.state}>{user.address.state}</p>
                <p className={styles.zip}>{user.address.zip}</p>
                <p className={styles.phone}>{user.phoneNumber}</p>

            </div>
            <div className={styles.theForm}>
            <h1>Add Address</h1>
                <h3>
                    <span>Default:</span> <img src='https://selenakitt.com/wp-content/files/scamazon.png'/>
                </h3>

            <p className={styles.text}>Address </p><input type='text' name="street" value={address.street}  className={styles.inputText} required />
            <p className={styles.text}>City </p><input type='text' name="city" value={address.city}  className={styles.inputText} required />
            <p className={styles.text}>State </p><input type='text' name="state" value={address.state}  className={styles.inputText} required />
            <p className={styles.text}>Zip </p><input type='text' name="zip" value={address.zip}  className={styles.inputText} required />
            <button type='submit'className={styles.submit} >Add Address</button>
            </div>
        </form>
    )
}