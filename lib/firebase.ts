import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4Hw4nQzva2tZOFK9O9YqUytHUUwbSvrQ",
  authDomain: "futureforge-2c61f.firebaseapp.com",
  projectId: "futureforge-2c61f",
  storageBucket: "futureforge-2c61f.firebasestorage.app",
  messagingSenderId: "903971242491",
  appId: "1:903971242491:web:d9817a796113d7d605cb5e",
  measurementId: "G-F6111DRGXC"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
