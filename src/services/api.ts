import { useQuery } from "react-query";
import { PublicAxios } from "../utils/axiosConfig/axiosConfig";

interface AddShipmentFormValue {
  name: string,
  origin: string,
  destination: string
}

interface UpdateStatusValues {
  status: "pending" | "in_transit" | "delivered";
  name?: string;
  origin?: string;
  destination?: string;
}


const getShipment = async (page: number, limit: number, status: string = "pending") => {
  const response = await PublicAxios.get(
    `/shipments?page=${page}&limit=${limit}&status=${status}`
  );
  const responseData = response.data;
  const ShipmentData = responseData?.payload?.shipments || [];
  return { ShipmentData };
};

export const useShipment = (page: number, limit: number) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["ShipmentData", page, limit],
    () => getShipment(page, limit),
    {
      refetchOnWindowFocus: false
    }
  );

  return {
    ShipmentData: data?.ShipmentData || [],
    isLoading,
    error,
    refetch
  };
};


const getInTransit = async (page: number, limit: number) => {
  const response = await PublicAxios.get(
    `/shipments?page=${page}&limit=${limit}&status=in_transit`
  );
  const responseData = response.data;
  const ShipmentData = responseData?.payload?.shipments || [];
  return { ShipmentData };
};

export const useInTransit = (page: number, limit: number) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["inTransit", page, limit],
    () => getInTransit(page, limit),
    {
      refetchOnWindowFocus: false
    }
  );

  return {
    ShipmentData: data?.ShipmentData || [],
    isLoading,
    error,
    refetch
  };
};


const getCompleted = async (page: number, limit: number) => {
  const response = await PublicAxios.get(
    `/shipments?page=${page}&limit=${limit}&status=delivered`
  );
  const responseData = response.data;
  const ShipmentData = responseData?.payload?.shipments || [];
  return { ShipmentData };
};

export const useCompleted = (page: number, limit: number) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["completed", page, limit],
    () => getCompleted(page, limit),
    {
      refetchOnWindowFocus: false
    }
  );

  return {
    ShipmentData: data?.ShipmentData || [],
    isLoading,
    error,
    refetch
  };
};

// export const useShipment = () => {
//     const {
//       data: Shipment,
//       isLoading,
//       refetch
//     } = useQuery('Shipment', async () => {
//       const response = await PublicAxios.get("/shipments/v1/shipments?page=1&limit=1&status=pending")
//       return response.data.payload
//     })

//     return { Shipment, isLoading, refetch }
//   }


export const addShipment = async (values: AddShipmentFormValue) => {
  const response = await PublicAxios.post("/shipments", values);
  return response.data;
};


export const updateShipment = async (values: UpdateStatusValues, id: string) => {
  const response = await PublicAxios.put(`/shipments/${id}`, values);
  return response.data;
};

export const updateDetails = async (values: UpdateStatusValues, id: string) => {
  const response = await PublicAxios.put(`/shipments/${id}`, values);
  return response.data;
};


export const handleDeleteShip = async (id: string) => {
  const response = await PublicAxios.delete(`/shipments/${id}`);
  return response.data;
};
