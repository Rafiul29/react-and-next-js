// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA2v5LPyvndqRMi70skZoPbJIp49QGyss",
  authDomain: "gconstuestbook-2098b.firebaseapp.com",
  projectId: "guestbook-2098b",
  storageBucket: "guestbook-2098b.firebasestorage.app",
  messagingSenderId: "546449538716",
  appId: "1:546449538716:web:3a91246a6b47b1142bb759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const sendPasswordReset = async (email) => {
  try {
    const res = await sendPasswordResetEmail(auth, email);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const signWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  auth,
  sendPasswordReset,
  signWithGoogle
};
