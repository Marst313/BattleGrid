import Image from "next/image";
import Pulse from "react-spinners/PulseLoader";
import React, { Children } from "react";

const Button = ({
  text,
  className,
  src,
  alt,
  type = "button",
  children,
  loading,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`flex items-center justify-center gap-5 rounded-lg px-10 py-3 hover:bg-opacity-80 ${className}`}
    >
      {loading ? <Pulse color="white" /> : <>{text}</>}
      {src && <Image src={src} alt={alt} width={30} height={30} />}

      {/* {text} */}

      {children}
    </button>
  );
};

export default Button;
