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
import SkillsItem from "./SkillsItem";


export default function Skills() {
  return(
    <section className="skills-section">
      <h2>Skills</h2>
      <ul>
        <SkillsItem Icon={IoLogoJavascript} Text="JavaScript" />
        <SkillsItem Icon={BiLogoTypescript} Text="Typescript" />
        <SkillsItem Icon={SiPython} Text="Python" />
        <SkillsItem Icon={SiPytest} Text="Pytest" />
        <SkillsItem Icon={FaNode} Text="Node" />
        <SkillsItem Icon={FaReact} Text="React" />
        <SkillsItem Icon={SiRedux} Text="Redux" />
        <SkillsItem Icon={SiMysql} Text="Mysql" />
        <SkillsItem Icon={SiJest} Text="Jest" />
        <SkillsItem Icon={TiHtml5} Text="Html" />
        <SkillsItem Icon={FaCss3Alt} Text="Css" />
        <SkillsItem Icon={SiMongodb} Text="Mongodb" />
        <SkillsItem Icon={SiFlask} Text="Flask" />
        <SkillsItem Icon={SiVitest} Text="Vitest" />
        <SkillsItem Icon={DiDjango} Text="Django" />
        <SkillsItem Icon={FaGithub} Text="Github" />
        <SkillsItem Icon={FaDocker} Text="Docker" />
      </ul>
    </section>
  )
}