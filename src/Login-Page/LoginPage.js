import React,{useState} from 'react';
import axios from 'axios'
import {Alert, Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from './../Hooks/useAuth';
import { Link } from 'react-router-dom';
import EmailLogin from './EmailLogin';


const LoginPage = () => {
    const location=useLocation()
    const history =useHistory()
    const redirectLocation=location?.state?.from || '/'
    const {loginWithGoogle,setUser,authError,setAuthError}=useAuth()
    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            // save user in database
            const newUser={email:user.email,displayName:user.displayName,role:'user'};
            saveUser(newUser)
            history.push(redirectLocation)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setAuthError(errorMessage)
          })
    }
       //  save user
       const saveUser=(user)=>{
        
  axios.put('https://powerful-harbor-60466.herokuapp.com/saveUser',user)
  .then((result)=>console.log(result))
      }
    return (
        <>
        
       <section className="m-auto justify-content-center row bg-dark">
       {authError && <Alert severity="success">{authError} try again</Alert>}
       <div className="col-lg-6 col-md-6 col-sm-8 my-5">
           <div className="m-2 p-2 bg-light">
               <EmailLogin/>
              <p className="text-center my-2"> <Link to='/register'> You don't have account? Register</Link></p>
           <Button variant="primary" className="form-control mb-3" onClick={handleLoginWithGoogle}> <span className="text-danger fs-4 me-2"><FontAwesomeIcon icon={faGoogle} /></span> Login with google</Button>
       </div>
       </div>
       
       </section>
       </>
    );
};

export default LoginPage;