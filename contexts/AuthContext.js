import { createContext, useState } from "react";
import Router from 'next/router';
import firebase from '../config/firebaseApp.config';

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = () => {
        try {
            setLoading(true);
            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    setUser(userCredential.user);
                    Router.push('/Home');
                })
        } finally {
            setLoading(false);
        }
    }
    const signout = () => {
        try {
            setLoading(true);
            return firebase
                .auth()
                .signOut()
                .then(() => {
                    setUser(false);
                    Router.push('/');
                })
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signin,
            signout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;