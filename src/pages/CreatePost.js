import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom"
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';
import { addDoc, collection, getFirestore } from "firebase/firestore";

function CreatePostPage({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation}){
    const [postSuccessful, setPostSuccessful] = useState(false);
    const navigate = useNavigate();

    const createPost = useCallback(async(e) => {
        e.preventDefault();
        const db = getFirestore(app);

        const Content = e.currentTarget.Content.value;
        const Date = e.currentTarget.Date.value;
        const Mood = e.currentTarget.Mood.value;
        const Title = e.currentTarget.Title.value;

        try {
            const docRef = await addDoc(collection(db, "posts"),{
                Content,
                Date,
                Mood,
                Title
                
            });
            console.log("Document written with ID: ", docRef.id);
            setPostSuccessful(true);
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
            {/* remember to style this portion */}
            {postSuccessful && <div className='Response'><p>On the CANVAS it goes!</p></div>}
        </>
    ); 
}

export default CreatePostPage;