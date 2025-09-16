import { useLocation, useNavigate } from 'react-router-dom';
import { ERROR_IMAGE_401, ERROR_IMAGE_404} from "../utilities/constants";

const ErrorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    //destructuring state 
    const {status, message} = location.state || {
        status : 404,
        message : "Page not found. Try again after sometime ",
    };

return (
    <div className="h-screen bg-red-500 flex flex-col justify-center items-center space-y-6 text-center">
        
        {status == 401  ? <img 
        src={ERROR_IMAGE_401} 
        alt="401 Error Image" 
        className="w-1/3 object-contain rounded-lg" 
        />:
        <img 
        src={ERROR_IMAGE_404} 
        alt="404 Error Image" 
        className="w-1/3 object-contain rounded-lg" 
        />
        }

        <div>
            <h1 className="text-4xl font-bold">Error: {status}</h1>
            <p className="text-lg font-semibold">{message}</p>
        </div>

        <button
            className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold  rounded hover:bg-red-700 cursor-pointer"
            onClick={() => navigate('/')}
        >
            Go Back to Home
        </button>
    </div>
);
};
export default ErrorPage;