import axiosInstance from "../axiosInstance";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/companies/login", credentials);

  return response.data;
};
