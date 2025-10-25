// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
// import {collection, getFirestore} from "firebase/firestore"
// import { addDoc} from "firebase/firestore";
// import { toast } from "react-toastify";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA-__gJU7tLXjLLpe2kq_DCwZsKARjEy3Y",
//   authDomain: "etflix-clone-b9130.firebaseapp.com",
//   projectId: "etflix-clone-b9130",
//   storageBucket: "etflix-clone-b9130.firebasestorage.app",
//   messagingSenderId: "626547654952",
//   appId: "1:626547654952:web:2021a9df569d4b0054101d",
//   measurementId: "G-H50VV9T8JZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app)
// const db = getFirestore(app)

// const signup = async(name, email, password) => {
//     try {
//         const response = await createUserWithEmailAndPassword(auth, email.trim(), password)
//         const user = response.user
//         await addDoc(collection(db, "user"),{
//           uid : user.uid,
//           name,
//           authprovider : "local",
//           email,
//         })
//     } catch (error) {
//         console.log(error);
//         // alert(error)
//         toast.error(error.code.split("/")[1].split("-").join(" "))
//     }
// }


// const login = async(email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//   } catch (error) {
//     console.log(error)
//     // alert(error)
//     toast.error(error.code.split("/")[1].split("-").join(" "))

//   }
// }

// const logout = async() => {
//   signOut(auth)
// }

// export {auth, db, login, signup, logout}



import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA-__gJU7tLXjLLpe2kq_DCwZsKARjEy3Y",
  authDomain: "etflix-clone-b9130.firebaseapp.com",
  projectId: "etflix-clone-b9130",
  storageBucket: "etflix-clone-b9130.appspot.com", // ✅ fixed
  messagingSenderId: "626547654952",
  appId: "1:626547654952:web:2021a9df569d4b0054101d",
  measurementId: "G-H50VV9T8JZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email.trim(), password);
    const user = response.user;
    await addDoc(collection(db, "users"), {   // ✅ plural collection
      uid: user.uid,
      name,
      authProvider: "local",  // ✅ camelCase
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);  // ✅ with await
  } catch (error) {
    console.log(error);
    toast.error("Logout failed");
  }
};

export { auth, db, login, signup, logout };
