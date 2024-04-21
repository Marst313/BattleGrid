import Navbar from "@/components/Navbar";
import React from "react";

import Content from "@/components/Content/Content";
import ScrollOnTop from "@/components/ScrollOnTop";

const page = () => {
  return (
    <main>
      <Navbar />

      <Content />

      <ScrollOnTop />
    </main>
  );
};

export default page;
