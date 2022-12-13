import {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {initializeApp} from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Styles and Components
import './App.css';
import CreatePostPage from './pages/CreatePost';
import CreateUserPage from "./pages/CreateUser";
import DashboardPage from './pages/Dashboard';
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";

const firebaseConfig = {
  apiKey: "AIzaSyA7_OEg_Oxf3qz5_8obmy7IcMwIvYojxmI",
  authDomain: "final-project-fall.firebaseapp.com",
  projectId: "final-project-fall",
  storageBucket: "final-project-fall.appspot.com",
  messagingSenderId: "848308109783",
  appId: "1:848308109783:web:7a567093bcb51b80664b92"
};

function App() {
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(()=>{
    const app = initializeApp(firebaseConfig);
    setAppInitialized(app);
  }, []);

  useEffect(()=>{
    if (appInitialized){
      const auth = getAuth();
      onAuthStateChanged(auth,(user)=>{
        if (user) {
          // User is signed in, see docs for a lsit of available properties
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          // User is signed out
          setUserInformation({});
          setIsLoggedIn(false)
        }
        // Whenever state changes setloading to false
        setIsLoading(false);
      })
    }
  }, [appInitialized])

  const router = createBrowserRouter([
    {
      path: "/user/:id",
      element: 
        <UserProfilePage
          app = {appInitialized}
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          isLoading = {isLoading}
          userInformation = {userInformation}
          setUserInformation = {setUserInformation}

        />,
    },
    {
      path: "/create-post",
      element: 
        <CreatePostPage
          app = {initializeApp}
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          isLoading = {isLoading}
          userInformation = {userInformation}
          setUserInformation = {setUserInformation}
        />,
    },
    {
      path: "/",
      element: 
        <DashboardPage
          app = {appInitialized}
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          isLoading = {isLoading}
          userInformation = {userInformation}
          setUserInformation = {setUserInformation}

        />,
    },
    {
      path: "/login",
      element: 
        <LoginPage
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          setUserInformation = {setUserInformation}
        />,
    },
    {
      path: "/create",
      element: 
        <CreateUserPage
          isLoggedin={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  
 

}

export default App;
