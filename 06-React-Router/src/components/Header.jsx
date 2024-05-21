import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navBar">
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/github">
              GitHub{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
