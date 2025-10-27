import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  // user state
  const [user, setUser] = useState(null);
  //   console.log(user);

  // loading state ;
  const [loading, setLoading] = useState(true);

  //   sign in with email and password ;
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign out ;
  const userSignOut = () => {
    return signOut(auth);
  };

  //   login

  const userLogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    //   setLoading(false)
    };
  }, []);

  //   auth info ;
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userSignOut,
    userLogIn,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
