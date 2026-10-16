import axiosInstance from "../axiosInstance";

export const postJob = async (credentials) => {
  const result = await axiosInstance.post("/companies/job", credentials);

  return result.data;
};
