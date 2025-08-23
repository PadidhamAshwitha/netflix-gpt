import { addUser, removeUser } from '../utilities/userSlice';
import { LOGO_URL, 
  NOTIFICATION_ICON, 
  PROFILE_LOGO, 
  GITHUB_PHOTO_URL } from '../utilities/constants';

import { auth } from '../utilities/firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const user = useSelector(store=>store.user);
  // const {displayName, photoURL } = user; // here displayname and photoURL are null cant destructure it

  const displayName = "Ashwitha";
  const photoURL = GITHUB_PHOTO_URL;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
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
      <header className=" absolute px-12 bg-gradient-to-b from-black z-10 flex justify-between">
      
      <img 
      className="w-2/12 " 
      src= {LOGO_URL} 
      alt = "netflix-logo" 
      />
      
      {user && (
        <div className = "w-20 h-14 m-2 flex justify-right ">

        <img 
        onClick={handleNotificationClick}
        className="w-10 m-2 rounded-lg cursor-pointer"
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
      <div className = " z-10 pt-2 m-2 mt-16 ml-350 text-white absolute rounded-xl bg-[rgba(0,0,0,0.85)]">
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