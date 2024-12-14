import React from 'react';
import logo150 from '../assets/logo-150.png';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo150} 
        alt="ECORYDS Logo" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
