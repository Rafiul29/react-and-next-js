import React, { useState } from "react";
import { loginWithEmailAndPassword, signWithGoogle } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(event)=>{
    event.preventDefault();

    try{
     const response = await loginWithEmailAndPassword(email,password)
     navigate('/')
     console.log(response)

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col
       items-center ">
      <h1 className="text-3xl my-4">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            placeholder="Email address"
            className="p-1 border border-gray-200 w-[300px] rounded-md"
            onChange={(e)=>setEamil(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            placeholder="Enter your password"
            className="p-1 border border-gray-200 w-[300px] rounded-md"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="p-2 bg-gray-400 mt-2 rounded-md  text-white">Login</button>
 
       
      </form>
      <button onClick={signWithGoogle}  className="p-2 bg-rose-400 mt-2 rounded-md  text-white">Signin With Google</button>
      <p>
       Don't Have an Account?
        <NavLink to="/register" className='underline'>Register</NavLink>
      </p>
      <p>
      Forgot Password ?
        <NavLink to="/reset" className='underline'>Reset Your Password</NavLink>
      </p>
    </div>
  );
};

export default Register;
