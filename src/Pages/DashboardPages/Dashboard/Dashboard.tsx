import React, { useState } from "react";
import MainLayout from "../../../constant/MainLayout";
import PendingShipment from "../PendingShipment/PendingShipment";
import IntransitShipment from "../IntransitShipment/IntransitShipment";
import DeliveredShipment from "../DeliveredShipment/DeliveredShipment";
import CreateShip from "../../../component/CreateShip/CreateShip";
import { useModal } from "../../../utils/Modals/ModalsContext";

const Dashboard: React.FC = () => {
  const { openModal } = useModal();
    const [activeTab, setActiveTab] = useState("Pending");

    const handleClick = (tab: string) => {
        setActiveTab(tab);
    };


    const handleOpenModal = () => {
        document.body.style.overflow = "";
        openModal(<CreateShip />);
      };

    return (
        <MainLayout>
            <div className="dashboard">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <ul className="flex justify-center font-semibold mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 border rounded-md">
                        <li
                            className={`px-6 py-2 cursor-pointer rounded-md ${activeTab === "Pending" ? "bg-[#084BBB] text-white" : "bg-white text-gray-700"
                                }`}
                            onClick={() => handleClick("Pending")}
                        >
                            Pending
                        </li>
                        <li
                            className={`px-6 py-2 cursor-pointer rounded-md ${activeTab === "in-Transit" ? "bg-[#084BBB] text-white" : "bg-white text-gray-700"
                                }`}
                            onClick={() => handleClick("in-Transit")}
                        >
                            In-Transit
                        </li>
                        <li
                            className={`px-6 py-2 cursor-pointer rounded-md ${activeTab === "Delivered" ? "bg-[#084BBB] text-white" : "bg-white text-gray-700"
                                }`}
                            onClick={() => handleClick("Delivered")}
                        >
                            Delivered
                        </li>
                    </div>
                </ul>

                <div
                onClick={handleOpenModal} 
                className='bg-[#084BBB] cursor-pointer text-white py-3 px-4 rounded-md font-semibold'>
                    Create Shipment
                </div>
                </div>
                <div className="p-4 w-full">
                    {activeTab === "Pending" && <PendingShipment/>}
                    {activeTab === "in-Transit" && <IntransitShipment/>}
                    {activeTab === "Delivered" && <DeliveredShipment/>}
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
