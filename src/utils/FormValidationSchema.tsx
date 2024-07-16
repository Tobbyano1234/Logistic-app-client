import * as Yup from "yup";


export const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    farmName: Yup.string().required("Last Name is required"),
    farmLocation: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
  });
  