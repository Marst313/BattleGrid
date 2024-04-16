import React from 'react';
import Link from 'next/link';

import BannerRegister from './components/BannerRegister';
import FormRegister from './components/FormRegister';

const page = () => {
  return (
    <section className="flex w-full justify-between ">
      {/* Banner */}
      <BannerRegister />

      {/* Register */}
      <div className="w-full p-10 ml-20  ">
        <div>
          <h2>Register</h2>

          <h4 className="mt-5 text-white/80">
            Already have an account ?
            <Link href="/login" className="text-base font-bold text-white">
              Login
            </Link>
          </h4>

          <h4 className="mt-10 text-white/80">Want to be?</h4>

          <FormRegister />
        </div>
      </div>
    </section>
  );
};

export default page;
