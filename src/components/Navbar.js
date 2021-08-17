import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        LoGo
      </a>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              about me
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              services
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Experience
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
