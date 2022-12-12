import React, {useEffect, useCallback} from 'react';
import {useNavigate } from "react-router-dom"
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';
import { addDoc, collection, getFirestore } from "firebase/firestore";

function CreatePostPage({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation}){
   const navigate = useNavigate();

    const createPost = useCallback(async(e) => {
        e.preventDefault();
        const db = getFirestore(app);

        const Title = e.currentTarget.Title.value;
        const Date = e.currentTarget.Date.value;
        const Content = e.currentTarget.Content.value;
        try {
            const docRef = await addDoc(collection(db, "posts"),{
                Title,
                Date,
                Content
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ",e)
        }
}, [app, userInformation]);
    
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
            <CreatePostForm createPost = {createPost}/>
        </>
    ); 
}

export default CreatePostPage;