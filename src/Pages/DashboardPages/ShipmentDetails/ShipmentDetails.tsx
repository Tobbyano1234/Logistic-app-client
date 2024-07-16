import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../../constant/MainLayout";
import { updateShipment, handleDeleteShip, useShipment } from "../../../services/api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { CustomError } from "../../../component/errormessage";
import { useModal } from "../../../utils/Modals/ModalsContext";
import EditShipmentModal from "./EditShipmentModal";

interface ShipmentDetailsState {
  imageUrl: string;
  shipName: string;
  status: string;
  tno: string;
  destination: string;
  location: string;
  _id: string;
}

const ShipmentDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page] = useState(1);
  const limit = 5;
  const { refetch } = useShipment(page, limit);

  const { imageUrl, shipName, status, tno, destination, location: currentLocation, _id } = location.state as ShipmentDetailsState;

  const [selectedStatus, setSelectedStatus] = useState(status);
  const [loading, setLoading] = useState(false);


  const handleBack = () => {
    navigate(-1);
  };

  const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as "pending" | "delivered" | "in_transit";
    try {
      const response = await updateShipment({ status: newStatus }, _id);
      if (response.statusCode === 201) {
        toast.success(response.message);
        refetch();
      }
      setSelectedStatus(newStatus);
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        (error.response.data as CustomError).message
      ) {
        toast.error((error.response.data as CustomError).message);
      } else {
        toast.error("Network Error please Try Again");
      }
    }
  };

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await handleDeleteShip(_id);
      toast.success(response.message);
      navigate(-1); // Navigate back after successful deletion
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        (error.response.data as CustomError).message
      ) {
        toast.error((error.response.data as CustomError).message);
      } else {
        toast.error("Network Error please Try Again");
      }
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const { openModal } = useModal();

  const handleOpenEditModal = () => {
    document.body.style.overflow = "";
    openModal(<EditShipmentModal shipmentDetails={{ imageUrl, shipName, status, tno, destination, currentLocation, _id }} handleBack={handleBack} />);
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row border rounded-md shadow-md p-4 bg-white">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={imageUrl} alt={shipName} className="rounded-md h-48 md:h-full object-cover w-full" />
          </div>
          <div className="w-full md:w-2/3 md:pl-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">{shipName}</h2>
              <div className="mt-2">
                <label htmlFor="status" className="text-gray-500">Status:</label>
                <select
                  id="status"
                  className="ml-2 border rounded-md px-3 py-1"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  disabled={loading} // Disable select while loading
                >
                  <option value="pending">Pending</option>
                  <option value="in_transit">In Transit</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
              <p className="text-gray-500 mt-2">TNO: <span className="text-black">{tno}</span></p>
              <p className="text-gray-500 mt-2">Destination: <span className="text-black">{destination}</span></p>
              <p className="text-gray-500 mt-2">Current Location: <span className="text-black">{currentLocation}</span></p>
            </div>
            <div className="mt-4">
              <button
                onClick={handleDelete}
                className={`bg-red-500 text-white py-2 px-4 rounded-md mr-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Deleting..." : "Delete Shipment"}
              </button>
              <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 mr-2 rounded-md">
                Back
              </button>

              <button onClick={handleOpenEditModal} className="bg-green-500 text-white py-2 px-4 rounded-md">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShipmentDetails;
