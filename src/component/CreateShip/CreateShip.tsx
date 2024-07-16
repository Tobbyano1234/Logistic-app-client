import React, { Fragment, useState } from 'react';
import { useModal } from '../../utils/Modals/ModalsContext';
import CustomInput from '../Frominput/CustomInput';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { addShipment, useShipment } from '../../services/api';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { CustomError } from '../errormessage';

interface FormValues {
  name: string;
  origin: string;
  destination: string;
}

const CreateShip: React.FC = () => {
  const [currentPage,] = useState(1);
  const  PAGE_SIZE = 5
  const { closeModal } = useModal();
  const { refetch } = useShipment(currentPage, PAGE_SIZE);


  const handleCloseModal = () => {
    document.body.style.overflow = '';
    closeModal();
  };

  const initialValues: FormValues = {
    name: '',
    origin: '',
    destination: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Company Name is required'),
    origin: Yup.string().required('Origin is required'),
    destination: Yup.string().required('Destination is required'),
  });

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      const response = await addShipment(values);
      if (response.statusCode === 201) {
        toast.success(response.message);
        handleCloseModal();
        refetch()
      }
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        (error.response.data as CustomError).message
      ) {
        toast.error((error.response.data as CustomError).message);
      } else {
        toast.error('Network Error please Try Again');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-xl shadow-md w-[95%] md:w-[35rem] relative max-h-full overflow-auto">
          <button
            className="absolute top-2 right-2 bg-none border-none cursor-pointer text-2xl text-gray-700"
            onClick={handleCloseModal}
          >
            x
          </button>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form>
                <div className="w-full md:w-[100%]">
                  <div className="flex flex-col gap-5">
                    <div className="w-full">
                      <CustomInput
                        label="Company Name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Company Name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        label="Origin"
                        type="text"
                        id="origin"
                        name="origin"
                        placeholder="Origin"
                        value={values.origin}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="origin"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        label="Destination"
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Destination"
                        value={values.destination}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="destination"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-[#084BBB] text-white py-2 px-4 rounded-md w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateShip;