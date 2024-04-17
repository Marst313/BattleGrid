'use client';
import Image from 'next/image';

import icon from '@/asset/image/login.image/img.Logo.png';
import React from 'react';
import { usePathname } from 'next/navigation';
import Menu from './Menu';
import Link from 'next/link';
const Navbar = () => {
  const path = usePathname();

  return (
    <div className="bg-abu1 py-2 flex  items-center justify-between px-32 drop-shadow-sm shadow-black">
      <Image src={icon} className=" w-24" />
      <Menu />

      <div className="flex gap-8 items-center">
        <Link href={'/login'}>
          <p className="bg-oren px-4 py-1 rounded-md">Sign In</p>
        </Link>
        <Link href={'/register'} className="border-oren border-2 px-4 py-1 rounded-md">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
