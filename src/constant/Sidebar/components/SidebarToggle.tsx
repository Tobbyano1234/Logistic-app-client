import React from "react";
import { Menu, Close } from "@mui/icons-material";

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="lg:hidden p-2 focus:outline-none bg-white focus:bg-gray-700 cursor-pointer"
    >
      {isOpen ? (
        <Close className="text-black" />
      ) : (
        <Menu className="text-black" />
      )}
    </div>
  );
};

export default SidebarToggle;
