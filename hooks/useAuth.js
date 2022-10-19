import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState, setState, useMemo } from 'react'
import * as Google from "expo-google-app-auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithCustomToken, signOut } from 'firebase/auth';
import {auth} from "../firebase";

const AuthContext = createContext({});

const config = {
    androidCliendId: '29236327307-ukdqq7dmjgdglni2gkrr4fe1mmu7n99n.apps.googleusercontent.com',
    iosClientId: '29236327307-c5vbu1nlntbl46upk0vihi5tg77eib3e.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public-profile", "email", "gender", "location"],
}

export const AuthProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => 
            onAuthStateChanged(auth, (user) => {
                console.log(('user',user))
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }

                setLoadingInitial(false);
            }),
        []
    );

    const logout = () => {
        setLoading(true);
        signOut(auth).catch((error) => setError(error)).finally(() => setLoading(false));
    }

    const signInWithGoogle = async () => {
        console.log("ONPRESSED")
        setLoading(true);
        Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === "success") {
                const {idToken, accessToken} = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);

                await signInWithCredential(auth, credential)
              }
              return Promise.reject();
            }).catch(error => setError(error))
              .finally(() => setLoading(false));
    };

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        signInWithGoogle,
        logout,
    }), [user, loading, error]);

    return (
        <AuthContext.Provider 
        value ={{memoedValue}}>
              {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
