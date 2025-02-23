import { useState } from "react"
import { sendPasswordReset } from "../firebase"
import { NavLink } from "react-router-dom"

const Reset = () => {
  const [email,setEamil]=useState('')

  return (
    <div>
      <h1>Reset Your Password</h1>
      <div>
        <input type="text"
        value={email}
        onChange={(e)=>setEamil(e.target.value)}
        placeholder="Enter email address"
        />
        <button  onClick={()=>sendPasswordReset(email)}>Send Password Reset Email</button>
      </div>
      <p>
       Don't Have an Account?
        <NavLink to="/register" className='underline'>Register</NavLink>
      </p>
    </div>
  )
}

export default Reset