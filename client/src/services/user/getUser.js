import axiosInstance from "../axiosInstance";

export const getUser = async () => {
  const result = await axiosInstance.get("/users/me");
  return result.data;
};
