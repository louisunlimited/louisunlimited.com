import Link from "next/link";
import React from "react";

import { social } from "../public/data";

const Footer: React.FC = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl md:text-xl"
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
          <Link href="/#home">
            <div className="text-lg cursor-pointer">
              louis<a className="text-lg font-extrabold">Unlimited</a>
            </div>
          </Link>
          <p>&copy; 2023 Louis Qian. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
