import React, {useEffect, useState, useMemo} from 'react';
import {useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import DashboardPost from '../components/DashboardPost';
import Header from '../components/Header';

function UserProfilePage({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation}){
   const navigate = useNavigate();

    useEffect(()=>{
        if (!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate])

    // useEffect(async ()=>{
    //     if (postData.length > 0) return;
    //     const db = getFirestore(app); 
    //     const querySnapshot = await getDocs(collection(db, "posts"));
    //     const data = [];
    //     querySnapshot.forEach((doc)=>{
    //         data.push(doc.data())
    //     })
    //     setPostData(data);
    // }, [app])

    const postData = useMemo(async ()=>{
        if (postData.length > 0) return;
        const db = getFirestore(app); 
        const querySnapshot = await getDocs(collection(db, "posts"));
        const data = [];
        querySnapshot.forEach((doc)=>{
            data.push(doc.data())
        })

    },[])
    console.log({postData});

//13:22

    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div  className = "DashboardPage">
                <div className = 'DashboardPageWrapper'>
                    <DashboardPost CanvasDate = "12/12/22" CanvasTitle = "Weeee" CanvasContent = "ahhhh"/>
                    <DashboardPost />
                    <DashboardPost />
                    <DashboardPost />
                </div>
                
            </div>   
        </>
    ); 
}

export default UserProfilePage;