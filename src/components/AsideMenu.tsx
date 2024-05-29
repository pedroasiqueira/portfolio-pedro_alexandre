import { FaTimes } from "react-icons/fa";
import { GrAccessibility } from "react-icons/gr";
import MenuItem from "./MenuItem";

type AsideMenuProps = {
  active: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AsideMenu({ active }: AsideMenuProps) {

  const closeSideBar= () => {
    active(false)
  }
  return(
    <aside
    className="aside-menu"
    // sideBar={active}
    >
      <FaTimes
      className="fatimes"
      onClick={closeSideBar}/>

      <nav>
      <MenuItem Icon={GrAccessibility} Text="Inicio"/>
      <MenuItem Icon={GrAccessibility} Text="Sobre mim"/>
      <MenuItem Icon={GrAccessibility} Text="Skills"/>
      <MenuItem Icon={GrAccessibility} Text="Projetos"/>
      <MenuItem Icon={GrAccessibility} Text="Contato"/>
      </nav>
    </aside>
  )
}