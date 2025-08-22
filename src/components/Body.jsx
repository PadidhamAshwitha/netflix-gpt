import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // signIn (or) signUp
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid : uid,
          email : email, 
          displayName : displayName,
          photoURl : photoURL,
        }));
      } else {
        //sign out
        dispatch(removeUser());
      }
});

  },[]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/browse",
        element : <Browse/>
    }
]);
export default Body;