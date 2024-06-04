import { useState } from "react";
import AsideMenu from "./AsideMenu"
import NavMenu from "./NavMenu"
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)

  return(
    <header className="header-pag">
      <NavMenu />
      <FaBars
      className="fabars"
      onClick={showSideBar} />
      {sideBar && <AsideMenu active={setSideBar}/>}
    </header>
  )
}