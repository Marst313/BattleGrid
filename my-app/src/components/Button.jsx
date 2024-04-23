import Image from "next/image";
import React from "react";
import Pulse from "react-spinners/PulseLoader";
const Button = ({ text, className, src, alt, type, loading }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`flex items-center justify-center gap-5 rounded-lg px-10 py-3 hover:bg-opacity-80 ${className}`}
    >
  
      {loading ? (
        <Pulse color="white" /> 
      ) : (
        <>
        
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
