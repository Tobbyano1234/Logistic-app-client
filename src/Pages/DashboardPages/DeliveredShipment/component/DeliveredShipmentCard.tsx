import React from "react";
import CheckIcon from "../../../../assets/svg/Group 57.png";

interface DeliveredShipmentCardProps {
  shipName: string;
  imageUrl: string;
  origin: string;
  destination: string;
  date: string;
}

export const DeliveredShipmentCard: React.FC<DeliveredShipmentCardProps> = ({ shipName, imageUrl, origin, destination, date }) => {
  return (
    <div className="flex border rounded-md shadow-md p-4 bg-white w-full max-w-xs mb-4 items-center">
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={shipName} className="rounded-full object-cover h-12 w-12" />
      </div>
      <div className="ml-4 flex-grow">
        <h2 className="text-lg font-semibold capitalize">{shipName}</h2>
        <p className="text-gray-500">Origin: <span className="text-black capitalize">{origin}</span></p>
        <p className="text-gray-500">Destination: <span className="text-black capitalize">{destination}</span></p>
        <p className="text-gray-500">Date: <span className="text-black capitalize">{date}</span></p>
       
        <p className="mt-2 text-black">has arrived in {destination}</p>
      </div>
      <div className="ml-auto">
        <img src={CheckIcon} alt="Check Icon" className="h-6 w-6 text-green-500" />
      </div>
    </div>
  );
};
