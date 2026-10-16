import axiosInstance from "../axiosInstance.js";

export const getCompanyPostedJobs = async () => {
  const result = await axiosInstance.get("/companies/list-jobs");

  return result.data;
};
