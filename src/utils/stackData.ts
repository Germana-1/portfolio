import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "Express", img: SiExpress },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Next.js", img: TbBrandNextjs },

  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django", img: DiDjango },

  { title: "GitHub", img: AiFillGithub },
];
