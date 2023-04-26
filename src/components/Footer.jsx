export default function Footer() {

  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/dradjai"

  return (
    <footer>
      <p>&copy; {currentYear} David Radjai
          <br />
          <a href={gitHubUrl}
          target="_blank"
          rel="noreferrer">GitHub</a></p>
    </footer>
  )
}