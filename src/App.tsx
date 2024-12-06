import React from "react";
import "./App.css";
import { NavLink, Outlet, RouteObject } from "react-router-dom";
import Menu from "./router/menu";

function App() {
  return (
    <div className="md:flex justify-start w-full block h-screen overflow-hidden font-interregular">
      <div
        id="navigation"
        className=" md:w-2/12 w-full border-r border-gray-200 md:h-full h-fit md:py-5 py-1 md:px-6 px-1.5"
      >
        <div className="flex gap-x-3 mb-5">
          <p className=" font-interbold ">Angeline Universe</p>
        </div>
        {Menu.map((item: RouteObject, index) => (
          <div key={item.path! + index} className="mb-1.5">
            {item.children && item.children.length > 0 && (
              <span className="text-gray-700 text-sm font-intersemibold">
                {item.id}
              </span>
            )}
            {!item.children && (
              <NavLink to={item.path ?? ""} className="">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "text-primary-dark font-intersemibold"
                        : "text-gray-700 font-intersemibold"
                    } cursor-pointer text-sm`}
                  >
                    {item.id}
                  </span>
                )}
              </NavLink>
            )}
            {item.children &&
              item.children.map((child: RouteObject, index) => (
                <div key={child.path! + index} className="ml-3 mt-1.5">
                  <NavLink
                    to={(item.path ?? "") + "/" + child.path}
                    className=""
                  >
                    {({ isActive }) => (
                      <span
                        className={`${
                          isActive
                            ? "text-primary-dark font-intersemibold"
                            : "text-gray-500 font-interregular"
                        } cursor-pointer text-sm`}
                      >
                        {child.id}
                      </span>
                    )}
                  </NavLink>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="md:py-5 md:w-10/12 md:px-8 max-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
