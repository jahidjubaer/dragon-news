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
  console.log(user);

  //   sign in with email and password ;
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign out ;
  const userSignOut = () => {
    return signOut(auth);
  };

  //   login

  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //   auth info ;
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userSignOut,
    userLogIn,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
