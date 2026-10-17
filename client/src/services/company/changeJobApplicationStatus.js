import axiosInstance from "../axiosInstance";

export const changeJobApplicationStatus = async ({ id, status }) => {
  const result = await axiosInstance.patch(`/companies/change-status/${id}`, {
    status: status,
  });
  return result.data;
};
