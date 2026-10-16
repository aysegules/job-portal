import axiosInstance from "../axiosInstance";

export const getCompany = async () => {
  const result = await axiosInstance.get("/companies/company");

  return result.data;
};
