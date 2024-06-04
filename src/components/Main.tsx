import About from "./About/About";
// import AsideMenu from "./AsideMenu";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Main() {
  return(
    <main className='main-pag'>
      <About/>
      <Skills/>
      <Projects/>
      {/* <AsideMenu/> */}
    </main>
  )
}