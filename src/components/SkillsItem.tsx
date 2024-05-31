import { MenuItemProps } from "./MenuItem";

export default function SkillsItem ({ Icon, Text }: MenuItemProps) {
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