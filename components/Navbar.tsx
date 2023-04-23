import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full h-20 z-[100] text-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="p-10">
          <Link href="/" className="text-xl cursor-pointer">
            louis<span className="text-xl font-extrabold">Unlimited</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
