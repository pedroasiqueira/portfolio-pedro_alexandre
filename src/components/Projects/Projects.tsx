import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    name: 'Trybe Futebol Clube',
    info: 'Aplicação desenvolvida para saber pontuação dos times em algum campeonato',
    github: 'https://github.com/pedroasiqueira',
  },
  {
    name: 'Trybe Futebol Clube 2',
    info: 'Aplicação desenvolvida para saber pontuação dos times em algum campeonato',
    github: 'https://github.com/pedroasiqueira',
  },
]

export default function Projects() {
  return(
    <section className="projects-section sections">
      <h2>Meus projetos</h2>
      {projectsList.map((project) => (
        <ProjectCard
        key={project.name}
        name={project.name}
        info={project.info}
        github={project.github}
        />
      ))}
      
    </section>
  )
}