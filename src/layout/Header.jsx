import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="lime darken-3">
        <div className=" nav-wrapper container">
          <div className="headerGitlink">
            <Link to="/" className="brand-logo">
              Foods Shop
            </Link>
          </div>
          <div className="linksWrapper">
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
