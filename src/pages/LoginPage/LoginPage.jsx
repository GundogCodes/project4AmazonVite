import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss'

export default function LoginPage({ user, setUser }) {
    const [showSignUp, setShowSignUp] = useState(false); // Initial state is set to hide SignUpForm
    const navigate = useNavigate();

    function handleShow() {
        setShowSignUp(!showSignUp)
    }
   
    return (
        <div className={styles.loginContainer}>

            {showSignUp ?
            <>
                <SignUpForm user={user} setUser={setUser} />
                <div className={styles.pDiv}>

                <p className={styles.btl} onClick={handleShow}>
                   Back to login 
                </p>
                <p>
                    By creating an account, you agree to Scmazon's Conditions of Use and
                    Privacy Notice.
                </p>
                </div>
            </>
                :
                <>
                    < LoginForm user={user} setUser={setUser} />
                    <div className={styles.lower}>
                        
                    <button className={styles.loginPage__registerButton} onClick={handleShow }>
                        Create your Scamazon account
                    </button> 
                    </div>
                   
                </>

            }

        </div>
    
    );
}