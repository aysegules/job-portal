import axiosInstance from "../axiosInstance";

export const changeJobVisibility = async (id) => {
  const result = await axiosInstance.post(`/companies/change-visibility/${id}`);

  return result.data;
};
