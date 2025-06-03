import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser)
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  const authData = {
    user, setUser, createUser, logOut, signIn,
  };
  return <AuthContext value={authData} >{children}</AuthContext>

};

export default AuthProvider;