import { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKFo1ctO8PJht_njIl5wXQg9I8I4wMLDE",
    authDomain: "guardlife-login.firebaseapp.com",
    projectId: "guardlife-login",
    storageBucket: "guardlife-login.appspot.com",
    messagingSenderId: "378120028132",
    appId: "1:378120028132:web:822a9c4732835aa06c51f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}
