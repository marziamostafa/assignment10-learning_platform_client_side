import React, { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);


    // login with google------
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // login with google done------

    useState(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user inside state ch', currentUser);
            setUser(currentUser);
        })

        return () => unSubscribe();
    }, [])

    const authInfo = { user, providerLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;