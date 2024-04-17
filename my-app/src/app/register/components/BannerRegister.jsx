import Image from "next/image";
import React from "react";

import substract from "@/asset/image/register.image/Subtract.png";
import logo from "@/asset/image/register.image/img.Logo.png";

const BannerRegister = () => {
  return (
    <div className="relative hidden w-[30rem]  rounded-2xl bg-gradient-to-b from-oren2 to-oren p-10 xl:block">
      <h3>Battle Grid</h3>

      <h2 className="mt-20 max-w-xs leading-relaxed">
        Start your competition with us
      </h2>

      <p className="mt-5 max-w-sm">
        Fighting . winning , and upgrading use your best skill. Try your best
        skill now!
      </p>

      <Image
        src={logo}
        alt="subtract"
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 transform"
        height={450}
        width={450}
      />

      <Image
        src={substract}
        alt="subtract"
        className="absolute bottom-0 left-0"
        height={400}
        width={400}
      />
    </div>
  );
};

export default BannerRegister;
