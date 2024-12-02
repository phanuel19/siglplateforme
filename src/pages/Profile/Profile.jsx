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
      <Navbar />
      <div id="main">{currentUser ? <p>profile</p> : <Login />}</div>
    </>
  );
}

export default Profile;
