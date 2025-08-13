import { BACKGROUND_IMG_URL } from "../utilities/constants";
import { performValidation } from "../utilities/validation";
import { useRef, useState } from "react";
import Header from "./Header";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utilities/firebase";
const Login = () => {
  
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const fullname = useRef(null);
  
  const handleBtnClick = () =>{
    //here it validate the form
    const message = performValidation(email.current.value, password.current.value);
    setErrorMessage(message);
    // console.log(email.current.value);
    // console.log(password.current.value);

    if(message) return;  // if something string we get insted of null means vlaidation is not correct so we return it back 
    // if validation is correct we have to signin / signup the user
    if(!isSignInForm){
      //signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        //if(errorCode == "auth/invalid-credential") setErrorMessage("email is not registered.")
        setErrorMessage(errorCode+ "-" + errorMessage);
      });

    }
  };
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header />
      <div className="absolute">
        <img src= {BACKGROUND_IMG_URL} alt = "background-image" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
      className="absolute w-3/12 p-8 min-w-[320px] my-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-xl bg-[rgba(0,0,0,0.85)]"
      >
        
        <h1 className="text-3xl font-bold p-2 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
        <input 
        ref={fullname} 
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white rounded-lg "
        />}
        
        <input 
        ref={email}
        type="text" 
        placeholder="Email or Mobile number" 
        className="p-4 my-4 w-full bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white rounded-lg "/>

        <input 
        ref={password}
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>

        {!isSignInForm && 
        <input 
        ref={confirmPassword} 
        type="password" 
        placeholder="Confirm Password" 
        className="p-4 my-4 w-full bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
        />}
        
        <button type="submit" className="p-4 my-6 w-full bg-red-600 hover:bg-red-700 rounded-lg cursor-pointer" onClick={handleBtnClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4"> { isSignInForm ? "New to Netflix?" : "Already have an account? "} </p> 
        <p className="text-m font-bold cursor-pointer hover:underline" onClick={toggleSignInForm}> {isSignInForm? "Sign up now" : "Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;