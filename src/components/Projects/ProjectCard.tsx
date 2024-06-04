export interface ProjectCardProps {
  name: string;
  info: string;
  github: string;
}

export default function ProjectCard({name, info, github}: ProjectCardProps) {
  return(
    <li
    className="skills-item"
    >
     <h3>{name}</h3>
      <p>{info}</p>
      <a href={github}>Link do projeto</a>
    </li>
  )
}