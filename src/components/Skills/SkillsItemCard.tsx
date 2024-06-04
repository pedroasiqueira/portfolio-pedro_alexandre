import { MenuItemProps } from "../Header/MenuItemCard";

export default function SkillsItemCard ({ Icon, Text }: MenuItemProps) {
  return (
    <li
    className="skills-item"
    >
      <Icon
      className="skills-item-icon"
      />
      {Text}
    </li>
  )
}