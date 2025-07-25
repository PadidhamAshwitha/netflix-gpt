import { useState } from "react";
import { BACKGROUND_IMG_URL } from "../utilities/constants";
import Header from "./Header";

const Login = () => {
  
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header />
      <div className="absolute">
        <img src= {BACKGROUND_IMG_URL} alt = "background-image" />
      </div>

      <form className="w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute text-white rounded-xl bg-[rgba(0,0,0,0.8)]">
        
        <h1 className="text-3xl font-bold p-2 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-500 rounded-lg "/>}
        <input type="text" placeholder="Email or Mobile number" className="p-4 my-4 w-full bg-gray-500 rounded-lg "/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-500 rounded-lg"/>
        {!isSignInForm && <input type="password" placeholder="Conform Password" className="p-4 my-4 w-full bg-gray-500 rounded-lg"/>}
        
        <button className="p-4 my-6 w-full bg-red-800 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4"> { isSignInForm ? "New to Netflix?" : "Already have an account? "} </p> 
        <p className="text-m font-bold cursor-pointer underline" onClick={toggleSignInForm}> {isSignInForm? "Sign up now" : "Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;