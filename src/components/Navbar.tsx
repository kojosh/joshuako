import { Button } from "../components/button"
import navLogo from "../assets/jk-favicon.png"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="floating-navbar" aria-label="Primary navigation">
      <Link to="/" className="navbar-logo" aria-label="Joshua Ko home">
        <img src={navLogo} alt="" />
      </Link>

      <nav className="nav-buttons" aria-label="Main pages">
        <Button variant="ghost" className="nav-button" asChild>
          <Link to="/">Home</Link>
        </Button>

        <Button variant="ghost" className="nav-button" asChild>
          <Link to="/projects">Projects</Link>
        </Button>

        <Button variant="ghost" className="nav-button" asChild>
          <Link to="/about">About</Link>
        </Button>
      </nav>
    </header>
  );
}
