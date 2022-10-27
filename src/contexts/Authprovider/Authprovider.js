import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../../firebase/firebase.config'



export const AuthContext = createContext();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const Authprovider = ({ children }) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user inside state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe()
        };
    }, [])


    // login with google------
    const googleLogin = () => {

        setLoading(true);
        console.log(loading);
        return signInWithPopup(auth, provider)
    }


    // signup with email and pass------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signup with email and pass------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with git
    const gitLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }


    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }



    const authInfo = { user, loading, googleLogin, setLoading, logOut, createUser, signIn, updateUserProfile, gitLogIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;