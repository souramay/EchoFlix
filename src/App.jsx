import React, { useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import {  useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/redux/AuthSlice";
import { useNavigate } from "react-router-dom";

function App() {
  
   const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
     
    });

    return () => unsubscribe();
  }, [dispatch,navigate]);
  

  return (
    
     
      <AppRoutes />
   
  );
}



export default App;