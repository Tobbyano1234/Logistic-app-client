import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

interface ShipmentCardProps {
  shipName: string;
  status: string;
  tno: string;
  imageUrl: string;
  origin: string;
  destination: string;
  _id:string
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ shipName, status, tno, imageUrl, destination, origin, _id }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/shipment/${tno}`, { state: { imageUrl, shipName, status, tno, destination, origin , _id} });
  };

  return (
    <div className="flex flex-col md:flex-row border rounded-md shadow-md p-4 bg-white w-full max-w-md mb-4">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img src={imageUrl} alt={shipName} className="rounded-md h-48 md:h-full object-cover w-full" />
      </div>
      <div className="w-full md:w-2/3 md:pl-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold capitalize">{shipName}</h2>
            <span className="text-gray-500">Status: <span className="text-black capitalize">{status}</span></span>
          </div>
          <p className="text-gray-500 mt-2">TNO: <span className="text-black capitalize">{tno}</span></p>
          <p className="text-gray-500 mt-2">Destination: <span className="text-black capitalize">{destination}</span></p>
          <p className="text-gray-500 mt-2">Origin: <span className="text-black capitalize">{origin}</span></p>
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

ShipmentCard.propTypes = {
  shipName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tno: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default ShipmentCard;
