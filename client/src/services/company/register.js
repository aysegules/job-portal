import axiosInstance from "../axiosInstance";
import createFormData from "../createFormData";

export const register = async (credentials) => {
  const response = await axiosInstance.post(
    "/companies/register",
    createFormData(credentials),
  );

  return response.data;
};
