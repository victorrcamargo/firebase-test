import React, { useState, useEffect } from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmit = async (e) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            console.log(result);
        } catch {
            alert('Login failed');
        }
    }

    const loginPhoneSubmit = async (e) => {
        try {
            const appVerifier = window.recaptchaVerifier;
            const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            console.log(result);
        } catch (error) {
            console.log(error);
            alert('Login failed');
        }
    }

    useEffect(() => {
        const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                onSignInSubmit();
            }
        }, auth);
        window.recaptchaVerifier = recaptchaVerifier;
    }, [])

    return (
        <div id="main">
            <h1>SORTA O SORDADINHO AI</h1>
            {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}


            <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => loginSubmit()}>Login</button>

            <p>Ou entre com telefone</p>
            <input type="text" placeholder="Telefone" onChange={e => setPhoneNumber(e.target.value)} />
            <button id="sign-in-button" onClick={() => loginPhoneSubmit(auth, phoneNumber)}>Login</button>
        </div>
    );
}