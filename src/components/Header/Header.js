import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{backgroundColor : "black" }}
      >
        <span
          className="navbar-brand mb-1 h1"
          style={{color: "rgba(255,255,255,.5)", fontFamily: "Viga"}}
        >
          Christian Mills
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item ml-auto">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </Link>
            </li>
            <li class="nav-item ml-auto">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li class="nav-item ml-auto">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
}

export default Header;
