import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ClockCircleTwoTone, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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

        <div className=" gap-4 hidden md:flex py-3 items-center">
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
        <div className="md:hidden">
          <MenuOutlined onClick={() => setToggleMenu(!toggleMenu)} />
        </div>
        {toggleMenu && (
          <div className="z-10 flex flex-col md:hidden absolute top-14 right-2 space-y-6 text-right shadow-lg pl-7 pr-3 py-5">
            {links.map((item) => (
              <NavLink
                className="text-gray-400 hover:text-blue-800 font-semibold mr-2"
                to={item}
              >
                {item === "/" ? "Home" : item}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
