import React from "react";
import { social } from "../public/data";
import { useState, useEffect } from "react";
import Image from "next/image";

import planet1 from "../public/assets/Planets/Planet1.svg";
import planet2 from "../public/assets/Planets/Planet2.svg";
import planet3 from "../public/assets/Planets/Planet3.svg";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //get mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white-700">
            Hi, I&apos;m&nbsp;
            <span className="hover:animate-pulse">
              <a className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-default">
                Louis
              </a>
            </span>
          </h1>
          <h1 className="py-2 text-white-700">
            A Student / Independent Developer
          </h1>
          <p className="py-4 text-white-600 max-w-[70%] m-auto">
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.&quot; <br></br> -- Louis (Yes, I said that)
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-3xl">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="p-2 cursor-pointer hover:scale-110 ease-in duration-300"
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
          <div className="hidden md:block">
            <div
              className="absolute left-[80%] top-[65%] duration-1000 ease-planet-expo"
              style={{
                transform:
                  "translate3d(" +
                  (mousePosition.x * 8) / 500 +
                  "px," +
                  (mousePosition.y * 7) / 500 +
                  "px, 0px)",
              }}
            >
              <Image src={planet1} alt="" />
            </div>
            <div
              className="absolute left-[5%] top-[20%] duration-1000 ease-planet-expo"
              style={{
                transform:
                  "translate3d(" +
                  (mousePosition.x * 5) / 600 +
                  "px," +
                  (mousePosition.y * 4) / 500 +
                  "px, 0px)",
              }}
            >
              <Image src={planet2} alt="" />
            </div>
            <div
              className="absolute left-[19%] top-[82%] duration-1000 ease-planet-expo"
              style={{
                transform:
                  "translate3d(" +
                  (mousePosition.x * 2) / 600 +
                  "px," +
                  (mousePosition.y * 2) / 700 +
                  "px, 0px)",
              }}
            >
              <Image src={planet3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
