import { useState } from 'react';
import * as usersService from '../../utilities/users-service.cjs';
import styles from './SignUpForm.module.scss'; // Assuming you have a separate CSS module for this form
import { Link, useNavigate } from 'react-router-dom';


export default function CreateAccountForm({ user, setUser }) {
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

     const navigate = useNavigate()
    function handleClick() {
        navigate('/user');
    }

    function handleChange(e) {
        if (e.target.name === 'firstName' || e.target.name === 'lastName') {

            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
                name: `${credentials.firstName} ${credentials.lastName}`,
            });
        } else {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        }
        setError('');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (credentials.password !== credentials.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const user = await usersService.signUp(credentials);
            setUser(user);
        } catch {
            setError('Account creation failed');
        }
        handleClick()
    }

    return (
        <div className={styles.createAccount}>
            <Link to="/">
                <img
                    className={styles.createAccountLogo}
                    src="https://selenakitt.com/wp-content/files/scamazon.png"
                    alt="Scamazon Logo"
                />
            </Link>


            <div className={styles.createAccount__container}>
                <h1 className={styles.createAccount__heading}>Create Account</h1>

                <form onSubmit={handleSubmit}>
                    <h5>First and Last Name</h5>
                    <div className="createAccount__nameFields">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First and Last Name"
                            value={credentials.firstName}
                            onChange={handleChange}
                            required
                            className={styles.createAccount__container__form__input__fname}
                        />
                    </div>

                    <h5>Email</h5>
                    <input
                        type="text"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />

                    <h5>Phone Number</h5>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={credentials.phoneNumber}
                        onChange={handleChange}
                        required
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        name="password"
                        placeholder='At least 6 characters'
                        value={credentials.password}
                        onChange={handleChange}
                        minLength="6"
                        required
                    />

                    <h5>Re-enter Password</h5>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={credentials.confirmPassword}
                        onChange={handleChange}
                        minLength="6"
                        required
                    />

                    <div className={styles.createAccount__buttonContainer}>
                        <button
                            type="submit"
                            className={styles.createAccount__continueButton}
                        >
                            Continue
                        </button>
                    </div>
                </form>
                
                <p className={styles.createAccount__error}>{error}</p>
            </div>
        </div>
    );
}

