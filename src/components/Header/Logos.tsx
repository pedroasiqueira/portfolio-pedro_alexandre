import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Logos() {
  return (
    <nav
    className="logos"
    >
      <a
      className="logo-linkedin"
      href="https://www.linkedin.com/in/pedro-alexandre-brazao-siqueira/"
      target="blank"
      >
        <FaLinkedin />
      </a>
      <a
      className="logo-github"
      href="https://github.com/pedroasiqueira"
      target="blank"
      >
        <FaGithub />
      </a>
    </nav>
  )
}