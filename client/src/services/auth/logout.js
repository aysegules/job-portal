import axiosInstance from "../axiosInstance";

export const logout = async () => {
  const result = await axiosInstance.post("/auth/logout");

  return result;
};
