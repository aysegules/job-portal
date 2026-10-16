import axiosInstance from "../axiosInstance";

export const getUserJobApplications = async () => {
  const result = await axiosInstance.get("/users/applications");

  return result.data;
};
