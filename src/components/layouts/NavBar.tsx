import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-gray-300">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center justify-between gap-x-8 px-4 py-6">
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
      </nav>
    </header>
  );
};

export default NavBar;
