import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white-700">
            Hi, I'm <span className="text-[#5651e5]">Louis</span>
          </h1>
          <h1 className="py-2 text-white-700">
            A Student / Independent Developer
          </h1>
          <p className="py-4 text-white-600 max-w-[70%] m-auto">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident."
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg shadow-[#5651e57f] p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              href="https://www.linkedin.com/in/yu-qian-661741223/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="rounded-full shadow-lg shadow-[#5651e57f] p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              href="https://github.com/louisunlimited"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="rounded-full shadow-lg shadow-[#5651e57f] p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              href="https://www.instagram.com/louissss_yu/"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
