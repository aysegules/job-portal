import axiosInstance from "../axiosInstance";

export const getAllJobs = async () => {
  const response = await axiosInstance.get("/jobs/");

  return response.data;
};
