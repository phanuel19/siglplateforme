import "./Login.css";
import { FaLock, FaUser } from "react-icons/fa";
import { auth } from "../../db/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";


function Login() {
 

  function handlesubmit(e) {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log(e.user)
        let json = JSON.stringify(e.user);
        localStorage.setItem("@user", json);
        toast.success("Connexion Réussie");
        form.reset();
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.code, error.message);
        console.log(error.code, error.message);
      });
  }
  return (

      <div className="container">
        
        <form action="" onSubmit={handlesubmit}>
          <h1>~ ~ SIGL ~ ~</h1>
          <div className="input-box">
            <input name="email" type="email" placeholder="Email" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              required
            />
            <FaLock className="icon" />
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
   
  );
}
export default Login;
