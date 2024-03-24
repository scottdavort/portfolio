import Link from "next/link";
import Image from "next/image";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-600 px-4 py-4 mt-4 text-white">
      <div className="flex justify-between items-center flex-wrap">
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/scott-manley-az/">
            <Image src="/images/linkedin.png" alt="LinkedIn logo" width={25} height={25} className="cursor-pointer" />
          </Link>
          <Link href="https://github.com/scottdavort">
            <Image src="/images/github.png" alt="GitHub logo" width={25} height={25} className="cursor-pointer" />
          </Link>
        </div>


      </div>
      
      {/* Copyright Notice */}
      <div className="text-center mt-2">
        © 2024 Scott Manley
      </div>
    </footer>
  );
}

export default Footer;
