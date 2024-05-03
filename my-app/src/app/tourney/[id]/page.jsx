import React from "react";

const page = ({ params }) => {
  console.log(params);

  return (
    <div className="bg px-5 pt-20">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-5 rounded-lg bg-abu1 p-10"></div>
    </div>
  );
};

export default page;
