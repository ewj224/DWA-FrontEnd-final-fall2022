import React from 'react';
import {Link} from "react-router-dom"
import {getAuth, signOut} from "firebase/auth"

function Header({setIsLoggedIn, setUserInformation}){
    function logout(){
        const auth = getAuth();
        signOut(auth)
            .then(()=>{
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch ((error)=>{
                console.warn(error);
            })
    }


    return (
        <div className='Header'>
            <p className='HeaderLogo'><Link to="/">CANVAS</Link></p>
            <nav>
            <p className='HeaderLink'><Link to='/'>Home Page</Link></p>
            <p className='HeaderLink'><Link to='/user/0'>My Profile</Link></p>
            <p className='HeaderLink' onClick={()=> logout()}>Log Out</p>
            <button className='HeaderButton'><Link to='/create-post'>Create Post</Link></button>
            </nav>  
        </div>
    );
};

export default Header;