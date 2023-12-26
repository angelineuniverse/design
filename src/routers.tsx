import { createBrowserRouter } from "react-router-dom";
import App from "./view/App";
import React from "react";
import LayoutIntroduction from "./view/guides/introduction";
import ViewButton from "./view/components/button";
import ComponentIndex from "./view/components/_index";
import ViewInput from "./view/components/input";
import ViewIcon from "./view/components/icon";
import ViewTable from "./view/components/table";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <LayoutIntroduction /> },
      {
        path: "component",
        element: <ComponentIndex />,
        children: [
          {
            path: "button",
            element: <ViewButton />,
          },
          {
            path: "icon",
            element: <ViewIcon />,
          },
          {
            path: "input",
            element: <ViewInput />,
          },
          {
            path: "table",
            element: <ViewTable />,
          },
        ],
      },
    ],
  },
]);

export default router;
