'use client';

import React, { useState } from 'react';

const FormRegister = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="flex w-full mt-10 gap-5">
        {/* Player */}
        <div className="flex items-center ps-4 border border-oren rounded  w-full">
          <input id="role-1" type="radio" name="bordered-radio" className="w-4 h-4 text-oren  focus:ring-oren2 " />

          <label htmlFor="role-1" className="w-full py-4 ms-2 text-sm font-medium text-oren">
            Player
          </label>
        </div>

        {/* Creator */}
        <div className="flex items-center ps-4 border border-white/80 rounded  w-full">
          <input id="role-2" type="radio" name="bordered-radio" className="w-4 h-4 text-oren  border-gray-300 focus:ring-oren2 focus:border-red-300" />
          <label htmlFor="role-2" className="w-full py-4 ms-2 text-sm font-medium text-white">
            Tournament Creator
          </label>
        </div>
      </div>

      <div>
        hello
        <input type="radio" />
      </div>

      <hr className="w-full h-[1px] mx-auto my-4 bg-abu border-0 rounded md:my-10 " />
    </>
  );
};

export default FormRegister;
