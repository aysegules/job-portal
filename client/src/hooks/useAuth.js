import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth/login";
import { register } from "../services/auth/register";
import { logout } from "../services/auth/logout";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });

export const useLogout = () =>
  useMutation({
    mutationFn: logout,
  });
