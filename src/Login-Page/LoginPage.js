import React,{useState} from 'react';

import {Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from './../Hooks/useAuth';
import { Link } from 'react-router-dom';
import EmailLogin from './EmailLogin';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const location=useLocation()
    const history =useHistory()
    const redirectLocation=location?.state?.from || '/'
    const {loginWithGoogle,setUser,error,setError}=useAuth()
    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            history.push(redirectLocation)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            handleShow()
          })
    }
    return (
        <>
        {/* <ModalMessage show={show} setShow={setShow} message={error} /> */}
       <section className="m-auto justify-content-center row bg-dark">
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