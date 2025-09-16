import { addUser, removeUser } from '../utilities/userSlice';
import { LOGO_URL, 
  NOTIFICATION_ICON, 
  PROFILE_LOGO, 
  GITHUB_PHOTO_URL } from '../utilities/constants';
import {SUPPORTED_LANGUAGES} from "../utilities/constants";
import {toggleGptSearchView } from "../utilities/gptSlice";
import {changeLanguage} from "../utilities/configSlice";

import { auth } from '../utilities/firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  // const {displayName, photoURL } = user; // here displayname and photoURL are null cant destructure it

  const displayName = "Ashwitha";
  const photoURL = GITHUB_PHOTO_URL;

  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleGptSearchClick = () => {
    //this dispatch action will toggle the showGptSearch in slice and  
    //not require any action to be givien. becz we aren't pushing any value
    dispatch(toggleGptSearchView());
  }
  const handleNotificationClick = ()=>{
    setShowNotification(!showNotification);
  };
  
  const handleProfileClick = () =>{
    setShowProfile(!showProfile);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }

  const handleLanguageChange = (e) =>{ // can also done with useRef
    dispatch(changeLanguage(e.target.value));
  };
  
  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // signIn (or) signUp
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({
            uid : uid,
            email : email, 
            displayName : displayName,
            photoURl : photoURL,
          }));
          navigate("/browse");
        } else {
          //sign out
          dispatch(removeUser());
          navigate("/");
        }
  });
   return () => unSubscribe();
    },[]);


  return (
    <div>
      <header className=" absolute md:mr-12 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
      <img 
      className="w-5/12 md:w-2/12 mx-auto md:mx-0 " 
      src= {LOGO_URL} 
      alt = "netflix-logo" 
      />
      
      {user && (
        <div className = "h-14 m-2 flex justify-between items-center ">
          {showGptSearch && (
            <select 
          className="m-2 px-4 py-2 font-semibold text-white bg-black cursor-pointer border border-white "
          onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option 
              className = "font-semibold p-2 "
              key = {lang.identifier} 
              value = {lang.identifier}
              >
              {lang.name}
              </option>))}
          </select>)}
        <button
        className = "px-6 py-2  text-white bg-red-600 font-bold hover:bg-red-700 hover:border border-white min-w-20 rounded-lg cursor-pointer"
        onClick = {handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        
        <img 
        onClick={handleNotificationClick}
        className="w-10 m-2 rounded-lg cursor-pointer hidden md:block"
        src = {NOTIFICATION_ICON}
        alt = "notification_icon"
        />

        <img 
        className = "m-2 rounded-lg cursor-pointer"
        onClick = {handleProfileClick}
        src = {PROFILE_LOGO}
        alt = "profile"
        />
      </div>
      )}
    </header>
    {/* {showNotification && (alert("No Notifications Yet!!!"))}   */}
    {showNotification && (
      <div className = " z-10 mt-16 ml-300 absolute text-right justify-items-end">
        <p className = "p-4 text-white  bg-blend-normal rounded-xl bg-[rgba(0,0,0,0.85)]">
        No Notifications yet!!!🔕🔕
        </p>
      </div>
    )}
    {showProfile && (
      <div className = "z-10 pt-2 m-2 mt-16 ml-350 text-white absolute rounded-xl bg-[rgba(0,0,0,0.85)]">
        <div className = "flex">
        <p className = "p-2 font-bold hover:shadow-xl">{displayName}</p>
        <img className = "w-3/12 rounded-lg" src={photoURL}/>
        </div>
        <div>
        <p 
          className = "p-4  font-bold cursor-pointer hover:underline ]"
          onClick = {handleSignOut}
          >
          Sign Out
        </p>
        </div>
      </div>
    )}
    </div>
  );
};

export default Header;