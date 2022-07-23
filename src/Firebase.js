import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq4ZpVWh-kCWN4UMFZhFTV8LtXpKY6eM4",
  authDomain: "corner-cart.firebaseapp.com",
  projectId: "corner-cart",
  storageBucket: "corner-cart.appspot.com",
  messagingSenderId: "116112378294",
  appId: "1:116112378294:web:d5dd841a29d11e9e3ad917",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const image = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("image", image);
    })
    .catch((error) => {
      console.log(error);
    });
};
