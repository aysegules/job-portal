import axiosInstance from "../axiosInstance";

export const deleteUser = async () => {
  const result = await axiosInstance.delete("/users/profile");
  
  return result.status;
};
