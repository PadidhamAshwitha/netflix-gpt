import React from 'react';
import { LOGO_URL } from '../utilities/constants';

const Header = () => {
  return (
    <div className=" absolute px-12 bg-gradient-to-b from-black z-10 ">
            <img className="w-2/12 " src= {LOGO_URL} alt = "netflix-logo" />
    </div>
  );
};

export default Header;