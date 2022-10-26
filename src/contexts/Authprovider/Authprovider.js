import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);


    // login with google------
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }


    // login with email and pass------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // logout
    const logOut = () => {

        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user inside state ch', currentUser);
            setUser(currentUser);
        });

        return () => {
            unSubscribe()
        };
    }, [])

    const authInfo = { user, providerLogin, logOut, createUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;