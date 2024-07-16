import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './utils/Modals/ModalsContext.tsx';


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ModalProvider>
      <App />
      <ToastContainer />
      </ModalProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
