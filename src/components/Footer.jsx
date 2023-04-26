import { Github } from "react-bootstrap-icons";
export default function Footer() {

  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/dradjai"

  return (
    <footer>
      <p className="text-center">
          <a href={gitHubUrl}
          target="_blank"
          rel="noreferrer"
          className="button-effect">
          <Github size="60" color="black" />
          </a>
          
          <small>&copy; {currentYear} David Radjai </small>
          </p>
          
    </footer>
  )
}