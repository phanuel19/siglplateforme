import { Link } from "react-router-dom";
import { auth } from "../../db/firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdGames,MdOutlineChat } from "react-icons/md";





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
    <div id="principal">
      
      <h4> {currentUser?.email || ""} </h4>
      <nav className="nav-bar">
        {currentUser ? (
          <>
            <Link to="/Home"> <BiWorld /> World</Link>
            <Link to="/Games"><MdGames /> Games</Link>
            <Link to="/Chat"> <MdOutlineChat /> Chat</Link>
            <Link to="/"> <FaRegUserCircle /> Profile</Link>
            <button onClick={SignOut}>Deconnexion</button>
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}
