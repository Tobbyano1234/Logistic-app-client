import Axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_TESTING_URL
  : import.meta.env.VITE_BASE_URL;

let setModalOpen: (open: boolean) => void;

export const setModalHandler = (modalHandler: (open: boolean) => void) => {
  setModalOpen = modalHandler;
};


export const AuthAxios = Axios.create({
  baseURL
});

export const PublicAxios = Axios.create({
  baseURL
});

// Add a request interceptor
AuthAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AuthAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // toast.error("Session has expired. Kindly login to continue");
        // handleLogout();
        setModalOpen(true);
      } else {
        toast.error(`Error status: ${error.response.status}`);
      }
    } 
    return Promise.reject(error);
  }
);
