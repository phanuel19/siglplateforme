import { Link } from "react-router-dom";
import { auth } from "../../db/firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";
import { toast } from "sonner";
import { useEffect, useState } from "react";
// import Home from '../../pages/Home/Home'
// import Profile from '../../pages/Profile/Profile'
export default function Navbar() {
  const [json, setJson]=useState(null)
  useEffect(() => {
    const userJson = localStorage.getItem("@user");
    setJson(userJson);
  }, []);

  const currentUser =json? JSON.parse(json) : null
  function SignOut() {
    signOut(auth).then(()=>{
     toast.success("Deconnexion réussie")
      localStorage.clear();
      window.location.reload();
      window.location.pathname ='/'
    }).catch((e)=>{
      toast.error(e.code,e.message)
    });
    
  }
  return (
    <div>
      
      <h4> {currentUser?.email || ""} </h4>
      <nav className="nav-bar">
        {currentUser ? (
          <>
            <Link to="/Home">World</Link>
            <Link to="/Games">Games</Link>
            <Link to="/Chat">Messagerie</Link>
            <Link to="/">Profile</Link>
            <button onClick={SignOut}>Deconnexion</button>
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}
