import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
     return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userActive) => {
      setLoading(false)
        setUser(userActive);
    });
  }, []);

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };



  const info = {
    user,
    createUser,
    GoogleLogin,
    loginUser,
    logout,
    Loading
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Provider;
