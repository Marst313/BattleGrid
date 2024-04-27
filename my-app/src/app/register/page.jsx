import React from "react";
import Link from "next/link";

import BannerRegister from "../../components/register/BannerRegister";
import FormRegister from "../../components/register/FormRegister";

const page = () => {
  return (
    <section className="flex w-full justify-center ">
      {/* Banner */}
      <BannerRegister />

      {/* Register */}
      <div className="w-full p-10 xl:ml-20 xl:w-1/2">
        <h2>Register</h2>

        <h4 className="mt-5 text-white/80">
          Already have an account ?
          <Link
            href="/login"
            className="text-base font-bold text-white hover:text-white/80"
          >
            Login
          </Link>
        </h4>

        <h4 className="mt-10 text-white/80">Want to be?</h4>

        <FormRegister />
      </div>
    </section>
  );
};

export default page;
