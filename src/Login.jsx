import "./Login.css";
import { FaLock, FaUser } from "react-icons/fa";
import {auth} from './db/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  function handlesubmit(e) {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    signInWithEmailAndPassword(auth,email,password).then((e)=>{
        const user = e.user 
        console.log(user)
    }).catch((error)=>{
        console.log(error.code, error.message)
    })
    console.log(email,password)
    form.reset();
  }

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <h1>SIGL Zone</h1>
        <div className="input-box">
          <input name="email" type="email" placeholder="Email" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input name="password" type="password" placeholder="Mot de passe" required />
          <FaLock className="icon" s />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
