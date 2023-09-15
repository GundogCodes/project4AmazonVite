
import { useState } from 'react';
import * as usersService from '../../utilities/users-service.cjs'
import styles from './LoginForm.module.scss';

import { Link,useNavigate} from 'react-router-dom';

import SignUpForm from '../SignUpForm/SignUpForm';


export default function LoginForm({user, setUser }) {

    const [credentials, setCredentials] = useState({
        loginValue: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }
    const navigate = useNavigate()
    function handleClick() {
        navigate('/user');
    }

    function handleLoginValueChange(evt) {
        const inputName = evt.target.name;
        const inputValue = evt.target.value;

        if (inputName === 'loginValue') {
            // Check if the input value looks like a phone number or email
            if (/^\d{10}$/.test(inputValue)) {
                setIsPhoneNumber(true);
            } else {
                setIsPhoneNumber(false);
            }
        }
        setCredentials({ ...credentials, [inputName]: inputValue });
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
            
        } catch {
            setError('Log In Failed - Try Again');
        }
        
       handleClick()
    }
   

    return (
        <div className={styles.login}>
            
            <div className={styles.login__container}>
                {showSignUpForm ? (
                    <SignUpForm setUser={setUser} />
                ) : (
                    <>
                        <h1 className={styles.login__heading}>Sign in</h1>

                        <form onSubmit={handleSubmit}>
                            <h5>Mobile Phone number or Email</h5>
                            <input
                                type="text"
                                name="loginValue"
                                value={credentials.loginValue}
                                onChange={handleLoginValueChange}
                                required
                            />

                            <h5>Password</h5>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            <div className="login__buttonContainer">
                                <button 
                                    type="submit"
                                    className={styles.login__signInButton}
                                >
                                    Continue
                                </button>
                            </div>
                        </form>

                        <p>
                            By continuing, you agree to Scamazon's Conditions of Use and Privacy
                            Notice.
                        </p>

                    </>
                )}
            </div>
        </div>
    );
}