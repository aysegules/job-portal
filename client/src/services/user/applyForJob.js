import axiosInstance from "../axiosInstance";

export const applyForJob = async (jobId) => {
  const result = await axiosInstance.post(`/users/apply/${jobId}`);

  return result.data;
};
