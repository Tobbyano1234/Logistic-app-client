import React, { Fragment } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const UserMenu: React.FC = () => {

  return (
    <Fragment>
      <div className="flex gap-2 md:gap-4">
        <div className="flex items-center text-light-gray-2 cursor-pointer border p-3 rounded-full">
          <IoNotificationsOutline className="w-[24px] h-[24px]" />
        </div>

        <div className="flex justify-between items-center relative cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src="https://www.kenjap.co.ke/wp-content/uploads/2018/11/Neik-431x428.png"
              alt="Profile"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />

            <div className="hidden md:flex flex-col justify-start items-start gap-1">
              <h6 className="text-black font-semibold capitalize">Adetola</h6>
            </div>
          </div>
          {/* Dropdown arrow */}
      
        </div>
      </div>
    </Fragment>
  );
};

export default UserMenu;
