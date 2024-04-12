// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-5eyKRA012v4_iZ4ZV6bpAL4XSFCGCFo',
  authDomain: 'aalav1.firebaseapp.com',
  projectId: 'aalav1',
  storageBucket: 'aalav1.appspot.com',
  messagingSenderId: '610829111403',
  appId: '1:610829111403:web:e7d04cb60528d0cf1c612e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
