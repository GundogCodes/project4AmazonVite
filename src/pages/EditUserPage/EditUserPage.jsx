import styles from './EditUserPage.module.scss'
import {useState, useRef, useEffect} from 'react'
import { updateUserInfo } from '../../utilities/users-api.cjs'

import { getUser } from '../../utilities/users-service.cjs'


export default function EditUserPage({user, setUser}){
    const [initUser,setInitUser] = useState({
        name:'',
        email:'',
        password:'',
        phoneNumber: ''
    })
    const [updatedData, setUpdatedData] = useState(false)
    const [editButtName, setEditButtName] = useState(false)
    const [editButtEmail, setEditButtEmail] = useState(false)
    const [editButtPassword, setEditButtPassword] = useState(false)
    const [editButtPhoneNumber, setEditButtPhoneNumber] = useState(false)

    const [userData, setUserData] = useState({
        name:user.name,
        email:user.email,
        password:user.password || '',
        phoneNumber:user.phoneNumber || ''
    })


    async function handleSubmit(e){
        e.preventDefault()
        try {
            const updatedUser = await updateUserInfo(user._id,userData)

            setUpdatedData(true)
            setUserData(updatedUser)
        } catch (error) {
            
        }
    }
    function handleChange(e){
        setUserData({...userData,[e.target.name]:e.target.value})

    }
    
    useEffect(()=>{
        const currentUser =  getUser()
        setInitUser(currentUser)
    },[])
    
    function handleEditClick(e){
        e.preventDefault()
        const buttonName = e.target.name

        if(buttonName === 'name'){
            setEditButtName(!editButtName)
        } else if(buttonName ==='email'){
            setEditButtEmail(!editButtEmail)
        }else if(buttonName ==='password'){
            setEditButtPassword(!editButtPassword)
            
        }else if(buttonName ==='phoneNumber'){
            setEditButtPhoneNumber(!editButtPhoneNumber)
            
        }
    }    

    return(
        <div className={styles.EditUserPage}>
            {user?
            <>
            <h1 className={styles.titles}>Login & Security</h1>
            <form onSubmit={handleSubmit}>
                <section>Username: <button name='name' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>
                        {updatedData?
                        <h4>{userData.name}</h4>
                        :
                        <h4>{initUser.name}</h4>

                    }
                    </div>
                    {editButtName?
                    <input defaultValue={user.name} name='name' onChange={handleChange} type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Email:  <button name='email' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                    {updatedData?
                        <h4>{userData.email}</h4>
                        :
                        <h4>{initUser.email}</h4>

                    }
                    </div>
                    {editButtEmail?
                    <input defaultValue={user.email} name='email' onChange={handleChange} type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Password: <button name='password' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                    {updatedData?
                        <h4>{userData.password} </h4>
                        :
                        <h4>{initUser.password} </h4>

                    }
                    </div>
                    {editButtPassword?
                    <input defaultValue={user.password} name='password' onChange={handleChange} type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Phone Number: <button name='phoneNumber' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                    {updatedData?
                        <h4>{userData.phoneNumber} </h4>
                        :
                        <h4>{initUser.phoneNumber} </h4>

                    }
                    </div>
                    {editButtPhoneNumber?
                    <input defaultValue={user.phoneNumber} name='phoneNumber' onChange={handleChange} type='text'/>
                    :
                    <></>
                }
                </section>
                <button type='submit'>Submit Changes</button>
            </form>
            </>
            :
            <>
          <h1 className={styles.linkDiv}><Link to='/login'>Please Login to Continue...</Link></h1>
            </>
            }
        </div>
    )
}