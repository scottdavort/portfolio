import Link from "next/link";
import Image from "next/image";
import React from 'react'; // Ensure React is imported

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-600 px-4 py-2">
      {/* Left section for logos and home link */}
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <div className="text-white hover:underline cursor-pointer">HOME</div>
        </Link>
        <Link href="https://www.linkedin.com/in/scott-manley-az/" passHref>
          <div className="cursor-pointer">
            <Image src="/images/linkedin.png" alt="LinkedIn logo" width={25} height={25} />
          </div>
        </Link>
        <Link href="https://github.com/scottdavort" passHref>
          <div className="cursor-pointer">
            <Image src="/images/github.png" alt="GitHub logo" width={25} height={25} />
          </div>
        </Link>
      </div>

      {/* Right section for navigation links */}
      <div className="flex items-center space-x-4">
        <Link href="/ask-questions" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">Virtual Interview</div>
        </Link>
        <Link href="/field-marketing" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">Field Marketing</div>
        </Link>
        <Link href="/product-marketing" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">Product Marketing</div>
        </Link>
        <Link href="/business-influencers" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">Business Influencers</div>
        </Link>
        <Link href="/sales" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">Sales</div>
        </Link>
        <Link href="/about" passHref>
          <div className="text-white py-2 hover:bg-gray-700 rounded px-2 cursor-pointer">About</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
