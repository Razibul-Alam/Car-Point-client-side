import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,updateProfile} from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from './../FirebaseConfig/FirebaseConfig';
const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[authError,setAuthError]=useState('')
  const[isLoading,setIsLoading]=useState(true);
// google login
const loginWithGoogle=()=>{
  setIsLoading(true)
   return signInWithPopup(auth, provider)
      .finally(()=>setIsLoading(false))
      
        }
       
        // resister user
        const registerUser=(email,password,name,history)=>{
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  setAuthError('');
                  const newUser={email:email,displayName:name}
                  setUser(newUser)
                   // send name to firebase after creation
                updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
              })
              .catch((error) => {
                  setAuthError(error.message);
                  console.log(error);
              })
              .finally(() => setIsLoading(false));
        }

        // login user with email and password
        const loginWithEmail=(email,password,location,history)=>{
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  const destination = location?.state?.from || '/';
                  history.replace(destination);
                  setAuthError('');
              })
              .catch((error) => {
                  setAuthError(error.message);
              })
              .finally(() => setIsLoading(false));
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
         
        return {loginWithGoogle,user,setUser,logOut,authError,setAuthError,isLoading,registerUser,loginWithEmail}
}
export default useFirebase;