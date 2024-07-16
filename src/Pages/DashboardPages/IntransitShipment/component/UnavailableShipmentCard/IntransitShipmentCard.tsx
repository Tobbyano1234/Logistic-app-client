import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { statusDisplayMap } from "../../../../../utils/helper";


export interface IntransitShipmentCardProps {
  shipName: string;
  status: string;
  tno: string;
  imageUrl: string;
  origin: string;
  destination: string;
  _id: string;
}

export const IntransitShipmentCard: React.FC<IntransitShipmentCardProps> = ({ shipName, status, tno, imageUrl, origin, destination, _id }) => {
  const isUnavailable = status.toLowerCase() === "in_transit";
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/shipment/${tno}`, { state: { shipName, status, tno, origin, destination, _id } });
  };

  return (
    <div className={`flex border rounded-md shadow-md p-4 ${isUnavailable ? "bg-gray-100" : "bg-white"} w-full max-w-md mb-4`}>
      <div className="w-1/3">
        <img src={imageUrl} alt={shipName} className="rounded-md object-cover h-full w-full" />
      </div>
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold capitalize">{shipName}</h2>
          <span className="text-gray-500">Status: <span className={`font-semibold ${isUnavailable ? "text-red-500 capitalize" : "text-black capitalize"}`}>{statusDisplayMap[status]}</span></span>
          <p className="text-gray-500 mt-2">TNO: <span className="text-black capitalize">{tno}</span></p>
          <p className="text-gray-500 mt-2">Origin: <span className="text-black capitalize">{origin}</span></p>
          <p className="text-gray-500 mt-2">Destination: <span className="text-black capitalize">{destination}</span></p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={handleViewDetails} className="bg-green-600 text-white p-2 rounded-full ml-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};


IntransitShipmentCard.propTypes = {
  shipName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tno: PropTypes.string.isRequired

};

export default IntransitShipmentCard;
