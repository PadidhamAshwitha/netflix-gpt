import {FACEBOOK_LOGO } from "../utilities/constants";

const Footer = () => {
    return (
        <footer className = "py-10 bg-black text-white text-xs ">
            <img 
            className = "ml-50 h-15 my-10"
            src={FACEBOOK_LOGO} 
            alt = "facebook logo"/>
            <div className = "flex justify-evenly ">
            <div>
                <ul>
                    <li className="pb-2 hover:underline cursor-pointer">Audio Description</li>
                    <li className="pb-2 hover:underline cursor-pointer">Gift Cards</li>
                    <li className="pb-2 hover:underline cursor-pointer">Investor Relations</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="pb-2 hover:underline cursor-pointer">Help Centre</li>
                    <li className="pb-2 hover:underline cursor-pointer">Media Centre</li>
                    <li className="pb-2 hover:underline cursor-pointer">Jobs</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="pb-2 hover:underline cursor-pointer">Terms of Use</li>
                    <li className="pb-2 hover:underline cursor-pointer">Legal Notices</li>
                    <li className="pb-2 hover:underline cursor-pointer">Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="pb-2 hover:underline cursor-pointer">Privacy</li>
                    <li className="pb-2 hover:underline cursor-pointer">Coolie Preferences</li>
                    <li className="pb-2 hover:underline cursor-pointer">Contact Us</li>
                </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;