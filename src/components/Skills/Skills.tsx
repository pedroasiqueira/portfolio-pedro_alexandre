import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { DiDjango } from "react-icons/di";
import {
  FaReact,
  FaNode,
  FaCss3Alt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiPython,
  SiPytest,
  SiRedux,
  SiMysql,
  SiJest,
  SiVitest,
  SiMongodb,
  SiFlask,
} from "react-icons/si";
import SkillsItemCard from "./SkillsItemCard";

const skillsList = [
  { Icon: IoLogoJavascript, Text: 'JavaScript' },
  { Icon: BiLogoTypescript, Text: 'Typescript' },
  { Icon: SiPython, Text: 'Python' },
  { Icon: SiPytest, Text: 'Pytest' },
  { Icon: FaNode, Text: "Node" },
  { Icon: FaReact, Text: "React" },
  { Icon: SiRedux, Text: "Redux" },
  { Icon: SiMysql, Text: "Mysql" },
  { Icon: SiJest, Text: "Jest" },
  { Icon: TiHtml5, Text: "Html" },
  { Icon: FaCss3Alt, Text: "Css" },
  { Icon: SiMongodb, Text: "Mongodb" },
  { Icon: SiFlask, Text: "Flask" },
  { Icon: SiVitest, Text: "Vitest" },
  { Icon: DiDjango, Text: "Django" },
  { Icon: FaGithub, Text: "Github" },
  { Icon: FaDocker, Text: "Docker" },
]


export default function Skills() {
  return(
    <section className="skills-section sections">
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skills) => (
          <SkillsItemCard
          key={skills.Text}
          Icon={skills.Icon}
          Text={skills.Text}
          />
        ))}
      </ul>
    </section>
  )
}