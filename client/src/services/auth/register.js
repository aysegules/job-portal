import axiosInstance from "../axiosInstance";

export const register = async ({ name, email, password, image, resume }) => {
  const response = await axiosInstance.post("/auth/register", {
    email,
    name,
    password,
    image,
    resume,
  });

  return response.data;
};
