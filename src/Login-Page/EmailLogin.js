import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import useAuth from './../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';

const EmailLogin = () => {
    const {loginWithEmail,user,authError,setAuthError,isLoading}=useAuth()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
      const { register,reset, handleSubmit,formState: { errors } } = useForm();
      const location=useLocation()
      const history=useHistory()

    const onSubmit = data =>{

    //   axios.post('http://localhost:5000/addcar',info)
    //   .then(response => { 
    //     handleShow()
    //     reset()
    //   })
     loginWithEmail(data.email,data.password,location,history)
    }
    return (
        <>
        <div className="mt-5 d-flex justify-content-center row">
           <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
           <h2 className="text-center text-danger mb-4">Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control mt-2"  type="email" placeholder="Email" {...register("email")} />
      <input className="form-control mt-2"  type="password" placeholder="Password" {...register("password")} />
     
      {errors.exampleRequired && <span>This field is required</span>}
     <input className="form-control mt-2 bg-primary"  type="submit"/>
    </form>
    </div>
    </div>
    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
    </>
    );
};

export default EmailLogin;