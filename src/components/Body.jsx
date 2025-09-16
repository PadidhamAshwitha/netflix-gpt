import Login from './Login';
import Browse from './Browse';
import ErrorPage from "./ErrorPage";
import DisplayMovie from "./DisplayMovie";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {

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
    },
    {
        path : "/error",
        element : <ErrorPage/>
    },
    {
        path: "*",     // Matches any unknown URL
        element: <ErrorPage />,  
    }, 
]);
export default Body;