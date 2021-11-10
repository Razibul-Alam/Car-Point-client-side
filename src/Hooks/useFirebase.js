import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut ,onAuthStateChanged} from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from './../FirebaseConfig/FirebaseConfig';
const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[error,setError]=useState('')
  const[isLoading,setIsLoading]=useState(true);
// google login
const loginWithGoogle=()=>{
  setIsLoading(true)
   return signInWithPopup(auth, provider)
      .finally(()=>setIsLoading(false))
      
        }
        

    //   auth identity
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
     
     },[])
        // ----
        // logout method
const logOut=()=>{
  setIsLoading(true)
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    
  }).finally(()=>setIsLoading(false))
  
}
         
        return {loginWithGoogle,user,setUser,logOut,error,setError,isLoading}
}
export default useFirebase;