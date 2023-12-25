import React from "react";
import { Outlet, useMatch } from "react-router-dom";
function ComponentIndex() {
  const location = useMatch("/component/:childPath/*");

  return (
    <div className="md:pt-6 font-euclidregular text-sm">
      <h2 className=" font-euclidsemi text-5xl text-primary-light md:mb-4 capitalize">
        {location?.params?.childPath}
      </h2>
      <Outlet />
    </div>
  );
}

export default ComponentIndex;
