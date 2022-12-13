import React, { useMemo } from "react";
// import { useParams } from "react-router-dom"
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import DashboardPost from '../components/DashboardPost';
// import Header from '../components/Header';

// const queryData = async (app) => {
//     if (!app) return [];
//     const db = getFirestore(app); 
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     const data = [];
//     querySnapshot.forEach((doc)=>{
//         data.push(doc.data())
//     });
//     return data;
// };

// function IndividualPost(){
//     const {id} = useParams();
//     return (
//         <Header />
//     )
// }

// export default IndividualPost;