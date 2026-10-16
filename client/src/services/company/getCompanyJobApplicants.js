import axiosInstance from "../axiosInstance";

export const getCompanyJobApplicants = async () => {
  const result = await axiosInstance.get("/companies/applicants");

  return result.data;
};
