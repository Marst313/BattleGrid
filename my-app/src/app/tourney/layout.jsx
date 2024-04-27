import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />

      {children}

      <Footer className="mt-0 border-t-0 p-10" />
    </main>
  );
};

export default layout;
