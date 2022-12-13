import React, {useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import DashboardPost from '../components/DashboardPost';
import Header from '../components/Header';

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


function DashboardPage({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation}){
   const navigate = useNavigate();
   const [postData, setPostData] = useState([]);

    useEffect(()=>{
        if (!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate])

    useEffect(() => {
        if (!app) return;
        queryData(app).then(setPostData);
    }, [app]);
  
    console.log ({postData});

    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div  className = "DashboardPage">
                <div className = 'DashboardPageWrapper'>
                    {postData.map((post) => (
                        <DashboardPost 
                            Date = {post.Date} 
                            Title = {post.Title} 
                            Content = {post.Content}
                            Mood = {post.Mood}
                        />
                    ))}
                </div>
                
            </div>   
        </>
    ); 
}

export default DashboardPage;