import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link to="/" className="fs-3 impact navbar-brand">Rick & Morty</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <style jsx>
                {`
                button[aria-expanded="false"] > .close{
                    display: none;
                }

                button[aria-expanded="true"] > .open{
                    display: none;
                }
                `}
            </style>
            <i className="fas fa-bars open fw-bold text-dark"/>
            <i className="fas fa-times close fw-bold text-dark"/>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <NavLink to="/" className="nav-link ">
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes" className="nav-link">
                Episodios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/locations" className="nav-link">
                Ubicaciones
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
