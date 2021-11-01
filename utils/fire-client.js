import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyCj5wTzEtLMxQaFv80az73SN1ZggtIWNZg",
  authDomain: "textweb-c14d1.firebaseapp.com",
  projectId: "textweb-c14d1",
  storageBucket: "textweb-c14d1.appspot.com",
  messagingSenderId: "378558592654",
  appId: "1:378558592654:web:ae5f366d40f80a79383bdf",
};

const app = initializeApp(clientCredentials);

export default app;
export const fireDB = getFirestore(app);
export const fireAuth = getAuth();
export const fireStorage = getStorage(app);
