import React from "react";
import Link from "next/link";
import FormLogin from "@/components/login/FormLogin";
import Loginbanner from "@/components/login/Banner";

export const metadata = {
  title: "Battle Grid - Login",
  description: "Login sekarang",
};

const page = () => {
  return (
    <section className="flex w-full justify-center">
      {/* Banner */}
      <Loginbanner />

      {/* Register */}
      <div className="w-full p-10 xl:ml-20 xl:w-1/2">
        <h2>Login</h2>

        <h4 className="mt-5 text-white/80">
          Dont have an account ?
          <Link
            href="/register"
            className="ml-2 text-base font-bold text-white hover:text-white/80"
          >
            Register
          </Link>
        </h4>

        <FormLogin />
      </div>
    </section>
  );
};

export default page;
