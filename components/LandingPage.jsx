import React from "react";
import { social } from "../public/data";

const LandingPage = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Louis</span>
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
                  className="p-6 cursor-pointer hover:scale-105 ease-in duration-300"
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
  );
};

export default LandingPage;
