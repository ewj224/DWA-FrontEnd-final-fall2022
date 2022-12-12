import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, updateProfile, createUserWithEmailAndPassword} from 'firebase/auth';
import CreateUserForm from '../components/CreateUserForm';
import { Link } from 'react-router-dom';

function CreateUserPage({ isLoggedIn, setIsLoggedIn, setUserInformation}){
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate]);

    const signUpUser = useCallback(
        (e) => {
            e.preventDefault();
            if (!e.currentTarget) return;

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const name = e.currentTarget.name.value;
            
            const auth = getAuth();

            console.log({email, password})

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setErrors();

                    updateProfile(user, { displayName: name })
                        .then(() => {
                            setUserInformation({
                                email: user.email,
                                displayName: name,
                                uid: user.uid,
                                accessToken: user.accessToken
                            });
                        })
                        .catch((err) => {
                            const errorCode = err.code;
                            const errorMessage = err.message;
                            console.warn({err, errorCode, errorMessage});
                            setErrors(errorMessage);
                        });
                    })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage});
                    setErrors(errorMessage);
                });
        },
        [setErrors, setIsLoggedIn, setUserInformation]
    );  



    return (
            <div className = "LoginWrapper">
                <h1 className='LoginLogo'>Create User</h1>
                <CreateUserForm signUpUser={signUpUser}/>
                <p>{errors}</p>
                <p className='CreateUserText'>Already have an account?</p>
                <p className='CreateUserText'>
                    <Link to="/login">Login</Link>
                </p>
            </div>  
    );
};

export default CreateUserPage;