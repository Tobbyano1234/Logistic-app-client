import React, { useState, useEffect } from "react";
import { useShipment } from "../../../services/api";
import ShipmentCard from "./component/ShipMentCard/ShipMentCard";

export type Shipment = { _id: string; name: string; status: string; trackingNo: string; destination: string; origin: string }

const PendingShipment: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const { ShipmentData, isLoading, refetch } = useShipment(page, limit);

  const imageUrls = [
    "https://media.istockphoto.com/id/489947758/photo/aerial-view-of-freight-ship-with-cargo-containers.webp?b=1&s=170667a&w=0&k=20&c=RTIA_NNxc9CH6Xu9zIDe-CczaeaJX63P-EkOpLSTV5U=",
    "https://media.istockphoto.com/id/1398875980/photo/old-ship-sails-on-the-sea-seen-from-aerial-point-of-view.webp?b=1&s=170667a&w=0&k=20&c=sIs12yuEE9WNBJqvk6ppHm08dfWuAvauNA7-FSyfys4=",
    "https://media.istockphoto.com/id/1437763427/photo/cargo-ship-main-purpose-is-business-services-import-export-international-by-containers-ship.webp?b=1&s=170667a&w=0&k=20&c=BEsCCaHn37SkXdm-KNbUtPJmv7UPhOLQBldHc2HRtCs=",
    "https://media.istockphoto.com/id/1490140125/photo/large-container-ship-sailing-on-the-sea.webp?b=1&s=170667a&w=0&k=20&c=mn1QAZkyY8xo8gqcIUtVQcWifUoM5_s3aDyVVQY0JZo=",
    "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXB8ZW58MHx8MHx8fDA%3D"
  ];

  const getRandomImageUrl = () => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex justify-center mt-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          {ShipmentData.length === 0 ? (
            <p className="text-center mt-8 text-gray-500">No shipments available</p>
          ) : (
            <>
              <div className="flex flex-wrap gap-3">
                {ShipmentData.map((shipment: Shipment) => (
                  <ShipmentCard
                    key={shipment._id}
                    _id={shipment._id}
                    shipName={shipment.name}
                    status={shipment.status}
                    tno={shipment.trackingNo}
                    destination={shipment.destination}
                    origin={shipment.origin}
                    imageUrl={getRandomImageUrl()}
                  />
                ))}
              </div>

            </>
          )}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PendingShipment;
