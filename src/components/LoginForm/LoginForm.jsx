import { useState } from 'react';
import * as usersService from '../../utilities/users-service.cjs';
import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Login Failed');
        }
    }

    // Function to show the SignUpForm when the "Create your Amazon Account" button is clicked
    function handleSignUpClick() {
        setShowSignUpForm(true);
    }

    return (
        <div className={styles.login}>
            <Link to="/">
                <img
                    className={styles.loginlogo}
                    src="/img/scamazon-logo.png"
                    alt="Scamazon Logo"
                />
            </Link>

            <div className={styles.login__container}>
                {showSignUpForm ? (
                    <SignUpForm setUser={setUser} />
                ) : (
                    <>
                        <h1 className={styles.login__heading}>Sign in</h1>

                        <form onSubmit={handleSubmit}>
                            <h5>Email or mobile phone number</h5>
                            <input
                                type="text"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
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
                        <div className={styles.login}>
                            <button
                                className={styles.login__registerButton}
                                onClick={handleSignUpClick}
                            >
                                Create your Scamazon Account
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
