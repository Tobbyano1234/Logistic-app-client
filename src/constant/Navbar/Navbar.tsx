import React, { Fragment } from "react";
import UserMenu from "./components/UserMenu";
import SidebarToggle from "../Sidebar/components/SidebarToggle";

interface NavbarProps {
  isSidebarOpen: boolean;
  handleSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isSidebarOpen,
  handleSidebarToggle
}) => {

  return (
    <Fragment>
      <div className="sticky top-0 z-20 bg-white shadow-sm p-3 px-5">
        <div className="flex flex-row justify-between h-14 gap-2 items-center">
          <div className="lg:hidden">
            <SidebarToggle
              isOpen={isSidebarOpen}
              onToggle={handleSidebarToggle}
            />
          </div>
          <div className="flex gap-1 items-center justify-center">
            <div className="w-1.5 h-4 bg-secondaryColor rounded"></div>
          </div>

          <UserMenu />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
