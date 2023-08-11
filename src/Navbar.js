import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-links">
        <Link to="/" className="Nav-item">Home</Link>
        <Link to="/create" className="Nav-item">New Blog</Link>
      </div>
      <div className="right-links">
        <Link to="/recipes" className="Nav-item">Recipes</Link>
        <Link to="/tech" className="Nav-item">TechHub</Link>
        <Link to="/travel" className="Nav-item">Travel</Link>
        <Link to="/lifestyle" className="Nav-item">Lifestyle</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
