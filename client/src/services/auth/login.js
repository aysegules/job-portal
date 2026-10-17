import axiosInstance from "../axiosInstance";
import createFormData from "../createFormData";

export const login = async (credentials) => {
  const response = await axiosInstance.post(
    "/auth/login",
    createFormData(credentials),
  );

  return response.data;
};
