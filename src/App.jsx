import React, { useState, useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/redux/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/redux/AuthSlice";
// udated git

function App() {
  const [authChecked, setAuthChecked] = useState(false);

  return (
    <Provider store={appStore}>
      <AuthChecker setAuthChecked={setAuthChecked} />
      <AppRoutes authChecked={authChecked} />
    </Provider>
  );
}

function AuthChecker({ setAuthChecked }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch, setAuthChecked]);

  return null;
}

export default App;