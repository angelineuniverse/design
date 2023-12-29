import React from "react";
import { NavLink } from "react-router-dom";
import { routeConfig } from "../routers";
const Sidenav = () => {
  return (
    <div className="text-xs text-gray-700 font-euclidregular">
      {routeConfig.map((route) => (
        <div className="md:mt-4 grid grid-cols-1 gap-5" key={route.id}>
          <div className="grid grid-cols-1 gap-3 md:px-8">
            <h1 className="font-euclidsemi text-xs capitalize">{route.id}</h1>
            {route.children.map((child) => (
              <NavLink
                key={child.id}
                to={
                  route.path === "/"
                    ? route.path + child.path
                    : route.path + "/" + child.id
                }
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                <span className=" capitalize">{child.id}</span>
              </NavLink>
            ))}
          </div>
          <div className="border border-t w-full"></div>
        </div>
      ))}
      {/* <div className="grid grid-cols-1 gap-3 md:px-8">
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
        {routeComponent.map((item) => (
          <NavLink
            key={item.path}
            to={"component/" + item.path}
            className={({ isActive }) => (isActive ? "text-secondary" : "")}
          >
            <span className=" capitalize">{item.path}</span>
          </NavLink>
        ))}
      </div> */}
    </div>
  );
};

export default Sidenav;
