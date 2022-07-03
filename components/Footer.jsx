import React from "react";

import { social } from "../public/data";

const Footer = () => {
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

          <div className="text-lg">
            louis<a className="text-lg font-extrabold">Unlimited</a>
          </div>

          <p>&copy; 2022 Louis Qian. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
