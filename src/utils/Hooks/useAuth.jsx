import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/AuthSlice";

import RandomUserPic from "../RandomUserPic";
import { auth } from "../firebase";


const useAuth = () => {
  const dispatch = useDispatch();

  const extractErrorCode = (message) => {
    const match = message.match(/\(([^)]+)\)/);
    return match
      ? match[1].replace(/\//g, " or ").replace(/-/g, " ")
      : message;
  };

  const FirebaseSignUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const pic = RandomUserPic();
      await updateProfile(user, {
        displayName: name,
        photoURL: pic,
      });
      
      dispatch(addUser({ uid: user.uid, email: user.email, displayName: name, photoURL: pic }));
      return null;
    } catch (error) {
      return extractErrorCode(error.message);
    }
  };

  const FirebaseSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }));
      return null;
    } catch (error) {
      return extractErrorCode(error.message);
    }
  };

  return { FirebaseSignUp, FirebaseSignIn };
};

export default useAuth;

