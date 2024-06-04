import { FaTimes } from "react-icons/fa";
import { GrAccessibility } from "react-icons/gr";
import MenuItemCard from "./MenuItemCard";

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
      <MenuItemCard Icon={GrAccessibility} Text="Inicio"/>
      <MenuItemCard Icon={GrAccessibility} Text="Sobre mim"/>
      <MenuItemCard Icon={GrAccessibility} Text="Skills"/>
      <MenuItemCard Icon={GrAccessibility} Text="Projetos"/>
      <MenuItemCard Icon={GrAccessibility} Text="Contato"/>
      </nav>
    </aside>
  )
}