import axiosInstance from "../axiosInstance";

export const changeJobApplicationStatus = async ({ id, status }) => {
  const result = await axiosInstance.patch(
    `/companies/change-status/${id}`,
    status,
  );
  return result.data;
};
