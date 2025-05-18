import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
const [user , setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('google sing in clicked');
  signInWithPopup(auth , provider)
  .then(result =>{
    console.log(result.user)
    setUser(result.user)
  })
  .catch(error=>{
    console.log(error)
  })
    }
const handleSIgnOut= ()=>{
    console.log('sign out done ')
    signOut(auth).then(result=>{
        console.log(result)
        setUser(null)
    }).catch(error=>{
        console.log(error)
    })
}


    return (
        <div>
            <h2>Please Login</h2>
{
    user ?<button onClick={handleSIgnOut}>Sign Out</button>: <button onClick={handleGoogleSignIn}>Sing Up with google</button>
    
}
{
    user && <div>
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <img src={user.photoURL} alt="" />
    </div>
}
        </div>
    );
};

export default Login;