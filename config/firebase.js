import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKFo1ctO8PJht_njIl5wXQg9I8I4wMLDE",
    authDomain: "localhost",
    projectId: "guardlife-login",
    storageBucket: "guardlife-login.appspot.com",
    messagingSenderId: "378120028132",
    appId: "1:378120028132:web:822a9c4732835aa06c51f1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//config ui
const uiConfig = {

    signInFlow: 'popup',

    signInSuccessUrl: '/signedIn',

    signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
};

export { auth, uiConfig };