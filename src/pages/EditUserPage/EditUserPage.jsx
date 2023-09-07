import styles from './EditUserPage.module.scss'
import {useState} from 'react'
export default function EditUserPage(){
    
    const [showInput, setShowInput] = useState(false)
    function handleEditClick(){
        setShowInput(!showInput)
    }    
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
        <div className={styles.EditUserPage}>
            <h1>Login & Security</h1>
            <h2>Edit Info</h2>
            <form >
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Name:</label>
                <label>{user.name}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='name' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>E-mail:</label>
                <label>{user.email}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='email' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Password:</label>
                <label>{user.password}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='password' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Primary mobile phone:</label>
                <label>{user.phoneNumber}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='phoneNumber' required/>
                :
                <></>
            }
                </div>
                <button type='submit'>Done</button>
            </form>
        </div>
    )
}