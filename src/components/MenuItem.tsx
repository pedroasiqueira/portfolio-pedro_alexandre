import { IconType } from "react-icons"

export type MenuItemProps = {
  Icon: IconType,
  Text: string,
}

export default function MenuItem({ Icon, Text }: MenuItemProps) {
  return(
      <a
      className="menu-item"
      >
        <Icon
        className="menu-item-icon"
        />
        {Text}
      </a>
  )
}