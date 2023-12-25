import React from "react";
import { NavLink } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="md:mt-4 grid grid-cols-1 gap-5 text-xs text-gray-700 font-euclidregular">
      <div className="grid grid-cols-1 gap-3 md:px-8">
        <h1 className="font-euclidsemi text-xs">Guides</h1>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span>Pendahuluan</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span>Instalasi</span>
        </NavLink>
      </div>
      <div className="border border-t w-full"></div>
      <div className="grid grid-cols-1 gap-3 md:px-8">
        <h1 className="font-euclidsemi text-xs">Components</h1>
        <NavLink
          to={"component/button"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span>Button</span>
        </NavLink>
        <NavLink
          to={"component/icon"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span>Icon</span>
        </NavLink>
        <NavLink
          to={"component/input"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span>Input</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidenav;
