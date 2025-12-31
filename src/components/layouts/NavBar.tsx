import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <header className="bg-gray-300">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <ul className="flex items-center gap-x-10 px-4 py-6">
          <li>
            <Link className="text-blue-500 underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" to="/faq">
              Faq
            </Link>
          </li>
        </ul>
        
        {/* Register and Login button */}
        <ul className="flex items-center gap-9">
          <li>
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link className="text-blue-500 underline" to="/register">
              <Button>Register</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
