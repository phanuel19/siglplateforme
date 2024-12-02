
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
function Home() {
  const [json, setJson]=useState(null)
  const userJson = localStorage.getItem("@user");
  const currentUser =json? JSON.parse(json): null;
  useEffect(() => {
    setJson(userJson)
  }, [userJson]);

  return (
    <>
    <Navbar/>
    {currentUser? (<div id="main"> <h1>Welcome to Home {currentUser.email}</h1> </div>) : (<div id="main"> rien </div>)}
      
    </>
  );
}

export default Home;
