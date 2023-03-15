import React from "react";
import { skills } from "../public/data";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <section className="bg-[#0d0d18] py-12">
      <div className=" container mx-auto">
        <div className="grid md:grid-flow-row grid-cols-5">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <Image src={skill.image} alt="" width={45} height={45} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
