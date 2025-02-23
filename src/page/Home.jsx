import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";

import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

const Home = () => {

  const navigate=useNavigate();
  const [user,loading,error] = useAuthState(auth)

  const handleLogout=()=>{
    signOut(auth).then(()=>{
      navigate('/login')
    }).catch((error)=>{
      console.log(error)
    })
  }

  if(loading) return <p>User info loading.......</p>

  return (
    <div>
      <p>Welcome , {user.email}</p>
      <button onClick={handleLogout} className="bg-black text-white rounded-lg p-1">Logout</button>
    </div>
  )
}

export default Home