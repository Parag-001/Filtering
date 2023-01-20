import React from "react";
import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="ul">
          <li>
            <NavLink className="navlinks" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/filter">
              Filter
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/fetchtitle">
              FetchTitle
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/fetchid">
              FetchId
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Main;
