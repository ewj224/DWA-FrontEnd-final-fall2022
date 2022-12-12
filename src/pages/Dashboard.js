import React, {useEffect} from 'react';
import {useNavigate } from "react-router-dom"
import DashboardPost from '../components/DashboardPost';
import Header from '../components/Header';

function UserProfilePage({ isLoading, isLoggedIn, setIsLoggedIn, setUserInformation}){
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
            <div  className = "DashboardPage">
            <p className= 'DashboardTitle'>Home Page</p>
                <div className = 'DashboardPageWrapper'>
                    <DashboardPost />
                    <DashboardPost />
                    <DashboardPost />
                    <DashboardPost />
                </div>
                
            </div>   
        </>
    ); 
}

export default UserProfilePage;