import About from "./About";
// import AsideMenu from "./AsideMenu";
import Projects from "./Projects";
import Skills from "./Skills";

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