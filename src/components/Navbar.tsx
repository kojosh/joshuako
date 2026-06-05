import { Button } from "../components/button"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-buttons flex gap-2 mb-4 justify-start">
            <Button variant="ghost" className="text-black hover:text-gray-700" asChild>
                <Link to="/">Home</Link>
            </Button>

            <Button variant="ghost" className="text-black hover:text-gray-700" asChild>
                <Link to="/projects">Projects</Link>
            </Button>

            <Button variant="ghost" className="text-black hover:text-gray-700" asChild>
                <Link to="/about">About</Link>
            </Button>
    </div>
  );
}