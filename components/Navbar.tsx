import Link from "next/link";
import React, { useState } from "react";
import { social } from "../public/data";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] bg-[#0d0d18]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="p-10">
          <Link href="/">
            <div className="text-xl cursor-pointer">
              louis<a className="text-xl font-extrabold">Unlimited</a>
            </div>
          </Link>
        </div>
        <div className="p-5">
          <ul className="hidden md:flex list-none">
            <Link href="/blog">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
                Posts
              </li>
            </Link>
            {/* <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer line-through">
                Projects
              </li>
            </Link> */}
            <Link href="/search">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
                Search
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#0d0d18]/90 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div className="text-md" onClick={handleNav}>
                  louis<a className="text-lg font-extrabold">Unlimited</a>
                </div>
              </Link>
              <div onClick={handleNav} className="p-5 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="py-4">Random thoughts happen...</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase list-none">
              <Link href="/blog">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Posts
                </li>
              </Link>

              <Link href="/search">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Search
                </li>
              </Link>

              {/* <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm line-through"
                >
                  Projects
                </li>
              </Link> */}

              {/* <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm line-through"
                >
                  Contact
                </li>
              </Link> */}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-2xl">
                {social.map((item, index) => {
                  const { href, icon } = item;
                  return (
                    <a
                      className="p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
