import Image from "next/image";
import React from "react";

const Button = ({ text, className, src, alt  , submit}) => {
  return (
    <button
      type="submit"
      
      className={`flex items-center justify-center gap-5 rounded-lg px-10 py-3 hover:bg-opacity-80 ${className}`}
    >
      {src && <Image src={src} alt={alt} width={30} height={30} />}

      {text}
    
    </button>
  );
};

export default Button;
