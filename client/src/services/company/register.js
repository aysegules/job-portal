import axiosInstance from "../axiosInstance";

export const register = async (credentials) => {
  const response = await axiosInstance.post("/companies/register", credentials);

  return response.data;
};
