import { FaTimes } from "react-icons/fa";

export default function AsideMenu({ active }) {

  const closeSideBar= () => {
    active(false)
  }
  return(
    <aside
    className="aside-menu"
    sideBar={active}>
      <FaTimes
      className="fatimes"
      onClick={closeSideBar}/>
    </aside>
  )
}