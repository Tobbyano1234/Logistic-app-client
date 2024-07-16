import React, { Fragment } from "react";

const SidebarUser: React.FC = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 items-center justify-center rounded-xl p-2 bg-secondary-color-dark">
        <h6 className="font-normal text-[12px] text-light-gray-3">
          Warehouse Storage Location
        </h6>
        <div className="p-2 flex border  w-full border-primary rounded-xl items-center  justify-center gap-1 bg-baseColor">
          <img
            src="https://www.kenjap.co.ke/wp-content/uploads/2018/11/Neik-431x428.png"
            alt="Profile"
            className="w-[30px] h-[30px] bg-white rounded-full object-cover"
          />
          <p className="text-white font-semibold text-xs">
            Adetola’s Farms In ...
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarUser;
