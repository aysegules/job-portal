import axiosInstance from "../axiosInstance";

export const updateUserProfile = async (credentials) => {
  const result = await axiosInstance.patch("/users/profile", credentials);

  return result.data;
};
