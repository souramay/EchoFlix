import React, { useEffect } from "react";

import {  useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/redux/AuthSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import { auth } from "./utils/firebase";

function App() {
  
   const dispatch = useDispatch();
  const navigate=useNavigate();
  const location=useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);
  

  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
}



export default App;