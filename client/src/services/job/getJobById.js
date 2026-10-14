import axiosInstance from "../axiosInstance";

export const getJobById = async (id) => {
  const response = await axiosInstance.get(`/jobs/${id}`);

  return response.data;
};
