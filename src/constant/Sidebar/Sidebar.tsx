import React, { Fragment } from "react";
import { LiaWarehouseSolid } from "react-icons/lia";
import SidebarItem from "./components/SidebarItem";
import DashboardLogo from "../../assets/svg/logo.svg";

const Sidebar: React.FC = () => {
  return (
    <Fragment>
      <div className=" bg-white shadow-md w-[15rem] text-white flex flex-col h-screen p-2 gap-2">
        <div className="flex items-center justify-center mb-3 mt-6">
          <img src={DashboardLogo} className="w" />
        </div>
        {/* <SidebarUser /> */}
        <div className="flex flex-col flex-grow h-full">
          <SidebarItem 
            label="Dashboard"
            icon={LiaWarehouseSolid}
            to="/dashboard"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
