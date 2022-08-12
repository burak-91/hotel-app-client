import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
        <div className="navItems">
            <span>{user.username}</span>
            <button className="navButton" onClick={handleLogout}>Log Out</button>
        </div>)  : (
          <div className="navItems">
            <button className="navButton"><Link className="navLink" to={"/register"}>Register</Link></button>
            <button className="navButton"><Link className="navLink"  to={"/login"}>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
