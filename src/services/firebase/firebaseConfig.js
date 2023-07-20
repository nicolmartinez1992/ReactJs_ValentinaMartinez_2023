import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-d-ZUuMwrhaJGXnVzBN9l0-Bj8Ak9KJE",
  authDomain: "proyecto-final-reactjs-vm.firebaseapp.com",
  projectId: "proyecto-final-reactjs-vm",
  storageBucket: "proyecto-final-reactjs-vm.appspot.com",
  messagingSenderId: "529214109484",
  appId: "1:529214109484:web:d46bb417f1e97f27679e89"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)