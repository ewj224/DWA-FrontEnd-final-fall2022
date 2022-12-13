import React, {useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import { collection, getDocs , getFirestore } from 'firebase/firestore';
import ProfileStyle from '../components/ProfileStyle';
import Header from '../components/Header'

const queryData = async (app) => {
    if (!app) return [];
    const db = getFirestore(app); 
    const querySnapshot = await getDocs(collection(db, "posts"));
    const data = [];
    querySnapshot.forEach((doc)=>{
        data.push(doc.data())
    });
    return data;
};


function UserProfilePage({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation}){
   const navigate = useNavigate();
   const [postData, setPostData] = useState([]);

    useEffect(()=>{
        if (!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate])

    useEffect(() => {
        if (!app) return;
        queryData(app).then(setPostData);
    }, [app]);

    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div  className = "PageWrapper">
                <h1>Profile</h1>
                <p>Email:{userInformation.email}</p>
                <p className='CanvasBlurb'> Welcome to CANVAS. As you continue take on each new day, we hope to remind you that your life is unique and, your story, a true work of art.
                    To the right of the screen, you will some colors filling into the space. These are the culmination of your posts. We hope to see your CANVAS flourish to depict you!
                    
                </p>
            </div>   
                <div className='ProfileStyle'>
                    {postData.map((post) => (
                        <ProfileStyle 
                            Mood = {post.Mood}
                        />
                    ))}
                </div>   
        </>
    ); 
}

export default UserProfilePage;