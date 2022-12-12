import React, {useEffect} from 'react';
import {useNavigate } from "react-router-dom"
import Header from '../components/Header';

function CreatePostPage({ isLoading, isLoggedIn, setIsLoggedIn, setUserInformation}){
   const navigate = useNavigate();

    useEffect(()=>{
        if (!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate])

    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div  className = "CreatePostWrapper">
                <p>OnCreatePostPage</p>
                <label htmlfor="title">Title</label>
                <input type="title" name="title"/>
                <label htmlfor="content">Content</label>
                <input type="content" name="content"/>
            </div>   
        </>
    ); 
}

export default CreatePostPage;