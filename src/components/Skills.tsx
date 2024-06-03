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
      <ul>
        <SkillsItem Icon={IoLogoJavascript} Text="JavaScript" />
        <SkillsItem Icon={BiLogoTypescript} Text="Typescript" />
        <SkillsItem Icon={SiPython} Text="JavaScript" />
        <SkillsItem Icon={SiPytest} Text="JavaScript" />
        <SkillsItem Icon={FaNode} Text="JavaScript" />
        <SkillsItem Icon={FaReact} Text="JavaScript" />
        <SkillsItem Icon={SiRedux} Text="JavaScript" />
        <SkillsItem Icon={SiMysql} Text="JavaScript" />
        <SkillsItem Icon={SiJest} Text="JavaScript" />
        <SkillsItem Icon={TiHtml5} Text="JavaScript" />
        <SkillsItem Icon={FaCss3Alt} Text="JavaScript" />
        <SkillsItem Icon={SiMongodb} Text="JavaScript" />
        <SkillsItem Icon={SiFlask} Text="JavaScript" />
        <SkillsItem Icon={SiVitest} Text="JavaScript" />
        <SkillsItem Icon={DiDjango} Text="JavaScript" />
        <SkillsItem Icon={FaGithub} Text="JavaScript" />
        <SkillsItem Icon={FaDocker} Text="JavaScript" />
      </ul>
    </section>
  )
}