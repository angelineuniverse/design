import { createBrowserRouter } from "react-router-dom";
import App from "./view/App";
import React from "react";
import ViewButton from "./view/components/button/button";
import ComponentIndex from "./view/components/_index";
import ViewInput from "./view/components/input/input";
import ViewIcon from "./view/components/icon";
import ViewTable from "./view/components/table";
import ViewPendahuluan from "./view/guides/pendahuluan";
import ViewInstalasi from "./view/guides/instalasi";

export const routeGuide = [
  {
    index: true,
    id: "pendahuluan",
    path: "",
    element: <ViewPendahuluan />,
  },
  {
    id: "instalasi",
    path: "instalasi",
    element: <ViewInstalasi />,
  },
];
export const routeComponent = [
  {
    id: "button",
    path: "button",
    element: <ViewButton />,
  },
  {
    id: "icon",
    path: "icon",
    element: <ViewIcon />,
  },
  {
    id: "input",
    path: "input",
    element: <ViewInput />,
  },
  {
    id: "breadcrumb",
    path: "breadcrumb",
    element: <ViewTable />,
  },
  {
    id: "checkbox",
    path: "checkbox",
    element: <ViewTable />,
  },
  {
    id: "dropdown",
    path: "dropdown",
    element: <ViewTable />,
  },
  {
    id: "select",
    path: "select",
    element: <ViewTable />,
  },
];
export const routeConfig = [
  {
    id: "guides",
    path: "/",
    children: routeGuide,
  },
  {
    id: "component",
    path: "component",
    element: <ComponentIndex />,
    children: routeComponent,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeConfig,
  },
]);

export default router;
