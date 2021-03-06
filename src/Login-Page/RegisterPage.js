import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../Hooks/useAuth';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
    const history=useHistory()
    const {registerUser,authError}=useAuth()
      const { register, handleSubmit,formState: { errors } } = useForm();

    const onSubmit = data =>{
     registerUser(data.email,data.password,data.name,history)
    }
  
    return (
        <>
        {authError && <Alert severity="success">{authError} try again</Alert>}
        <div className="mt-5 d-flex justify-content-center row">
           <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
           <h2 className="text-center text-danger mb-4">Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control mt-2"  type="text" placeholder="Name" {...register("name")} />
      <input className="form-control mt-2"  type="email" placeholder="Email" {...register("email")} />
      <input className="form-control mt-2"  type="password" placeholder="Password" {...register("password")} />
     
      {errors.exampleRequired && <span>This field is required</span>}
     <input className="form-control mt-2 bg-primary"  type="submit"/>
    </form>
    <p className="text-center my-2"> <Link to='/login'> You already have account? Login</Link></p>
    </div>
    </div>
    </>
    );
};

export default RegisterPage;