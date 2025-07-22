import React from "react";
import { NavLink } from "react-router-dom";
export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>RF</span>
        <h3>Alejandro Pascual</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/portafolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portafolio
            </NavLink>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curriculum
            </NavLink>
            <NavLink
              to="/Contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
            <NavLink
              to="/Servicios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Servicios
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
