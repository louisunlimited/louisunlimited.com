//social icons
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const social = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/yu-qian-661741223/",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/louisunlimited",
  },
  {
    icon: <AiOutlineMail />,
    href: "mailto: yuq4@illinois.edu",
  },
];

// skill images
import SkillSwift from "./assets/Socials/swift.svg";
import SkillNextjs from "./assets/Socials/next.js.svg";
import SkillGolang from "./assets/Socials/golang.svg";
import SkillTailwind from "./assets/Socials/tailwind.svg";
import SkillTypeScript from "./assets/Socials/typescript.svg";

export const skills = [
  { image: SkillSwift },
  { image: SkillNextjs },
  { image: SkillTypeScript },
  { image: SkillGolang },
  { image: SkillTailwind },
];
