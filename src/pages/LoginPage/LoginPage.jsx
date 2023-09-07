import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { useNavigate } from 'react-router-dom';
export default function LoginPage({user, setUser}) {
    const [showSignUp, setShowSignUp] = useState(false); // Initial state is set to hide SignUpForm
    console.log(user)
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
    // Function to show the SignUpForm when the "Create Scamazon" button is clicked
    function handleCreateScamazonClick() {
        setShowSignUp(true);
    }

    return (
        <main>
            {user?
          <button onClick={handleClick}></button>
           
          
           
        : <LoginForm setUser={setUser} />

        }
           
                
        
        </main>
    );
}
