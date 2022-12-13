import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from '../components/LoginForm';
import { Link } from "react-router-dom";

function LoginPage({isLoggedIn, setIsLoggedIn, setUserInformation}){
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate])

    const loginUser = useCallback((e)=>{
        e.preventDefault();
        
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserInformation({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    accessToken: user.accessToke
                });
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({error, errorCode, errorMessage});
                setErrors(errorMessage);
            });
    }, [setIsLoggedIn, setUserInformation]);

    return (
        <>
            <div className = "LoginWrapper">
                    <h1 className="LoginLogo">Canvas</h1>
                    <LoginForm loginUser={loginUser}/>
                    <p>{errors}</p>
                    <p className='BoldLoginText'>Don't have an account?</p>
                    <p><Link to="/create"  className='LoginCreateUser'>Create User</Link></p>
                </div>    
        </>
    );
};

export default LoginPage;