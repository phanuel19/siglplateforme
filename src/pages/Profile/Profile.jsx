import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Login from "../Login/Login";


function Profile() {
  const [json, setJson] = useState(null);
  const userJson = localStorage.getItem("@user");
  const currentUser = json ? JSON.parse(json) : null;
  useEffect(() => {
    setJson(userJson);
  }, [userJson]);

  return (
    <>
     
     {currentUser ? ( <><Navbar />< div id="main"><p>profile</p></div></> ) : <Login />}
    </>
  );
}

export default Profile;
