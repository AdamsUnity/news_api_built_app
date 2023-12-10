import React from "react";
import { NavLink } from "react-router-dom";
import { ClockCircleTwoTone } from "@ant-design/icons";

const Navbar = () => {
  const links = [
    "/",
    "business",
    "entertainment",
    "education",
    "sport",
    "technology",
  ];
  return (
    <nav className="shadow-md mx-auto max-w-5xl py-3 px-4">
      <div className="flex items-cente justify-between gap-4 max-w-6xl mx-auto">
        <div className="flex gap-3 items-center">
          <ClockCircleTwoTone />
          <h1 className="text-blue-500">News TimeApp</h1>
        </div>

        <div className="flex gap-4  py-3 ">
          {" "}
          {links.map((item) => (
            <NavLink
              className="font-semibold mr-2 hover:text-blue-500 text-gray-400 transition-colors duration-300"
              to={item}
            >
              {" "}
              {item === "/" ? "Home" : item}{" "}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
