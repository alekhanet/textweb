import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import "firebase/auth"
import "firebase/firestore"

const clientCredentials = {
  apiKey: "AIzaSyDv5E8bODKBG3zRremY2mI_zrMPCUXQeck",
  authDomain: "next-977ce.firebaseapp.com",
  projectId: "next-977ce",
  storageBucket: "next-977ce.appspot.com",
  messagingSenderId: "1098288107226",
  appId: "1:1098288107226:web:3734ad0f0d5ec214209fe3",
}

const app = initializeApp(clientCredentials)

export default app
export const fireDB = getFirestore(app)
export const fireAuth = getAuth()
export const fireStorage = getStorage(app)
