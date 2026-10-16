import axiosInstance from "../axiosInstance";

export const register = async (credentials) => {
  const response = await axiosInstance.post("/auth/register", credentials);

  return response.data;
};
