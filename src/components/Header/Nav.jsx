import React from "react";
import { Link, useLocation } from "react-router-dom";
import tokenService from "../../utils/tokenService";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const user = tokenService.getUserFromToken();
  const token = tokenService.getToken();

  const location = useLocation();

  const handleLogout = () => {
    tokenService.removeToken();
    navigate("/");
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <button style={{ marginRight: "1em" }}>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button style={{ marginRight: "1em" }}>
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button style={{ marginRight: "1em" }}>
              <Link to="/signup">Sign Up</Link>
            </button>
          </li>
          <li>
            {!token ? null : (
              <button style={{ marginRight: "1em" }}>
                <Link to="/pods">Book Now</Link>
              </button>
            )}
          </li>
          <li>
            {!token ? null : (
              <>
                <button style={{ marginRight: "1em" }} onClick={handleLogout}>
                  Log Out
                </button>
                <button>
                  <Link to={`/dashboard/:${user._id}`}>Dashboard</Link>
                </button>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
