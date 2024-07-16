import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  to
}) => {
  const isActive = true;

  return (
    <NavLink
      to={to}
      className={`flex items-center justify-center text-center px-4 py-2 my-1 rounded-lg hover:bg-quaternaryColor ${isActive ? "bg-[#084BBB] text-white font-semibold" : "text-[#084BBB] font-semibold border border-[#084BBB]"
        }`}
    >
      <Icon className={"mr-2 text-white"} />
      <span className={"inline text-white"}>
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;
